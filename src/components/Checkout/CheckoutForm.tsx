"use client";

import { useMutation } from "@apollo/client/react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { checkoutRequestBodySchema } from "@/app/api/checkout/schema";
import { useCartContext } from "@/context/cartContext/CartContext";
import { CreateOrderDocument } from "@/graphql/generated/graphql";
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
  email: "",
  postalCode: "",
  region: "",
};

export const CheckoutForm = () => {
  const router = useRouter();
  const { summaryPrice, cartItems } = useCartContext();
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
  const [createOrder] = useMutation(CreateOrderDocument);

  const onSubmit: SubmitHandler<CheckoutFormType> = async (data) => {
    const parsedFormData = checkoutFormSchema.safeParse(data);

    if (parsedFormData.success) {
      try {
        const checkoutFormData = parsedFormData.data;
        await createOrder({
          variables: {
            order: {
              email: checkoutFormData.email,
              total: summaryPrice,
              stripeCheckoutId: "123456789",
            },
          },
        });
      } catch {
        console.error("An error occurred");
      }
      const { data } = await axios.post(API_ROUTES.checkout, {
        cartItems,
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
      <h2 className="font-bold text-lg">Contact information</h2>
      <TextField
        {...register("email")}
        label="Email"
        required
        error={errors.email?.message}
      />
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
