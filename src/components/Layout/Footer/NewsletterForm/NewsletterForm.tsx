"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button";
import { TextField } from "@/components/Form/Input/TextField";
import { API_ROUTES } from "@/shared/constants/appRoutes";

import { newsletterFormSchema } from "./newsletterFormSchema";

type NewsletterFormType = z.infer<typeof newsletterFormSchema>;

const newsletterFormDefaultValues = {
  email: "",
};

export const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormType>({
    defaultValues: newsletterFormDefaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(newsletterFormSchema),
  });

  const onSubmit: SubmitHandler<NewsletterFormType> = async (data) => {
    const parsedFormData = newsletterFormSchema.safeParse(data);

    if (parsedFormData.success) {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_APP_URL}${API_ROUTES.newsletter}`,
          parsedFormData.data,
        );
        reset();
      } catch {
        console.error("An error occurred");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-2 flex-wrap justify-center items-start"
    >
      <div className="basis-full xs:basis-auto">
        <TextField
          {...register("email")}
          error={errors.email?.message}
          className="xs:w-72"
        />
      </div>
      <Button
        className="w-full xs:w-auto"
        type="submit"
        variant="outlined"
        disabled={isSubmitting}
      >
        Subscribe
      </Button>
    </form>
  );
};
