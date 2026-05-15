"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components";
import { TextField } from "@/components/Form/Input/TextField";
import { Link } from "@/components/Link";
import { APP_ROUTES } from "@/shared/constants";
import { PagePropsSearchParams } from "@/shared/types/page";

import { signInFormSchema } from "./utils/schema";
import { SignInFormType } from "./utils/types";

const signInDefaultValues: SignInFormType = {
  email: "",
  password: "",
};

export default function SignInPage({
  searchParams,
}: PageProps<"/auth/signin"> & PagePropsSearchParams) {
  const { replace } = useRouter();
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormType>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(signInFormSchema),
    defaultValues: signInDefaultValues,
  });

  const onSubmit: SubmitHandler<SignInFormType> = async (data) => {
    try {
      setErrorMessage(null);
      const callbackUrlSearchParam = (await searchParams).callbackUrl;
      const callbackUrl =
        !callbackUrlSearchParam || Array.isArray(callbackUrlSearchParam)
          ? APP_ROUTES.home
          : callbackUrlSearchParam;

      const result = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (result?.error) {
        setErrorMessage(`Error: ${result.error}`);
      }

      if (result?.ok) {
        replace(callbackUrl);
      }
    } catch (e) {
      console.error("An error occurred during sign in", e);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-center mb-8">Sign In</h1>
      {errorMessage && (
        <p className="text-error text-center mb-4">{errorMessage}</p>
      )}
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("email")}
          label="Email"
          error={errors.email?.message}
          required
        />
        <TextField
          {...register("password")}
          label="Password"
          error={errors.password?.message}
          required
          type="password"
        />
        <Button disabled={isSubmitting} type="submit" fullWidth>
          Sign In
        </Button>
      </form>
      <Link className="pl-0 text-sm" href={APP_ROUTES.signUp}>
        Don&apos;t have an account? Sign Up
      </Link>
    </div>
  );
}
