"use client";

import { useMutation } from "@apollo/client/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { useCartContext } from "@/context/cartContext/CartContext";
import { CreateOrderDocument } from "@/graphql/generated/graphql";

import { Button } from "../Button";
import { TextField } from "../Form/Input/TextField";
import { RowContainer } from "./RowContainer";
import { checkoutFormSchema } from "./schema";

type CheckoutFormType = z.infer<typeof checkoutFormSchema>;

const checkoutFormDefaultValues: CheckoutFormType = {
  address: "",
  apartment: "",
  cardNumber: "",
  city: "",
  company: "",
  cvc: "",
  email: "",
  expirationDate: "",
  nameOnCard: "",
  postalCode: "",
  region: "",
  sameAsShipping: "",
};

export const CheckoutForm = () => {
  const { summaryPrice } = useCartContext();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
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
        reset();
      } catch {
        console.error("An error occurred");
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
      <h2 className="font-bold text-lg">Payment details</h2>
      <TextField
        {...register("nameOnCard")}
        label="Name on card"
        required
        error={errors.nameOnCard?.message}
      />
      <TextField
        {...register("cardNumber")}
        label="Card number"
        required
        error={errors.cardNumber?.message}
      />
      <RowContainer>
        <TextField
          {...register("expirationDate")}
          label="Experation date (MM/YY)"
          error={errors.expirationDate?.message}
          required
        />
        <TextField
          {...register("cvc")}
          label="CVC"
          error={errors.cvc?.message}
          required
        />
      </RowContainer>
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
      <Button disabled={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};
