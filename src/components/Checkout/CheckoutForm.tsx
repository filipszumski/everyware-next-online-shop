"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { checkoutRequestBodySchema } from "@/app/api/checkout/schema";
import { CheckoutResponseData } from "@/app/api/checkout/types";
import { useCartContext } from "@/context/cartContext/CartContext";
import { API_ROUTES } from "@/shared/constants/appRoutes";

import { Button } from "../Button";
import { TextField } from "../Form/Input/TextField";
import { RowContainer } from "./RowContainer";
import { checkoutFormSchema } from "./schema";

type CheckoutFormType = z.infer<typeof checkoutFormSchema>;
type CheckoutRequestBodyType = z.infer<typeof checkoutRequestBodySchema>;

const checkoutFormDefaultValues: CheckoutFormType = {
  address: "",
  apartment: "",
  city: "",
  company: "",
  postalCode: "",
  region: "",
};

export const CheckoutForm = () => {
  const router = useRouter();
  const { cartItems } = useCartContext();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<CheckoutFormType>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: checkoutFormDefaultValues,
  });

  const onSubmit: SubmitHandler<CheckoutFormType> = async (data) => {
    const parsedFormData = checkoutFormSchema.safeParse(data);

    const cartItemsPayload = cartItems.map((cartItem) => ({
      slug: cartItem.data.id,
      quantity: cartItem.quantity,
    }));

    if (parsedFormData.success) {
      const { data } = await axios.post<
        CheckoutRequestBodyType,
        AxiosResponse<CheckoutResponseData>
      >(API_ROUTES.checkout, {
        cartItems: cartItemsPayload,
      } satisfies CheckoutRequestBodyType);

      if (data.checkoutUrl) {
        router.push(data.checkoutUrl);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-4 col-span-2"
    >
      <h2 className="font-bold text-lg">Shipping address</h2>
      <TextField
        {...register("company")}
        label="Company"
        error={errors.company?.message}
      />
      <TextField
        {...register("address")}
        label="Address"
        error={errors.address?.message}
        required
      />
      <RowContainer>
        <TextField
          {...register("apartment")}
          label="Apartment"
          error={errors.apartment?.message}
          required
        />
        <TextField
          {...register("city")}
          label="City"
          error={errors.city?.message}
          required
        />
      </RowContainer>
      <RowContainer>
        <TextField
          {...register("region")}
          label="State / Province"
          error={errors.region?.message}
          required
        />
        <TextField
          {...register("postalCode")}
          label="Postal code"
          error={errors.postalCode?.message}
          required
        />
      </RowContainer>
      <RowContainer>
        <Button disabled={isSubmitting} type="submit" fullWidth>
          Continue to payment
        </Button>
      </RowContainer>
    </form>
  );
};
