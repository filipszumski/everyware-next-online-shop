"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

import { createAccountReqBodySchema } from "@/app/api/signup/utils/schema";
import { Button } from "@/components";
import { TextField } from "@/components/Form/Input/TextField";
import { Link } from "@/components/Link";
import {} from "@/graphql/generated/graphql";
import { API_ROUTES, APP_ROUTES } from "@/shared/constants";
import { handleError } from "@/shared/utilities/handleError";

import { signUpFormSchema } from "./utils/schema";
import { SignUpFormType } from "./utils/types";

const signUpDefaultValues: SignUpFormType = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpPage() {
  const { replace } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormType>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(signUpFormSchema),
    defaultValues: signUpDefaultValues,
  });

  const onSubmit: SubmitHandler<SignUpFormType> = async (data) => {
    try {
      await axios.post(API_ROUTES.signUp, {
        email: data.email,
        name: data.name,
        password: data.password,
      } satisfies z.infer<typeof createAccountReqBodySchema>);

      replace(APP_ROUTES.signIn);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-center mb-8">Sign Up</h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("email")}
          label="Email"
          error={errors.email?.message}
          required
        />
        <TextField
          {...register("name")}
          label="Name"
          error={errors.name?.message}
          required
        />
        <TextField
          {...register("password")}
          label="Password"
          error={errors.password?.message}
          required
          type="password"
        />
        <TextField
          {...register("confirmPassword")}
          label="Confirm Password"
          error={errors.confirmPassword?.message}
          required
          type="password"
        />
        <Button disabled={isSubmitting} type="submit" fullWidth>
          Sign Up
        </Button>
      </form>
      <Link className="pl-0 text-sm" href={APP_ROUTES.signIn}>
        Already have an account? Sign In
      </Link>
    </div>
  );
}
