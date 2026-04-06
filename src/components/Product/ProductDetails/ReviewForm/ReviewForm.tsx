import { useMutation } from "@apollo/client/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button";
import { TextArea } from "@/components/Form/Input/TextArea";
import { TextField } from "@/components/Form/Input/TextField";
import {
  CreateProductReviewDocument,
  GetProductReviewDocument,
  PublishProductReviewDocument,
} from "@/graphql/generated/graphql";

import { ReviewFormRating } from "./ReviewFormRating";
import { reviewFormSchema } from "./reviewFormSchema";

type ReviewFormProps = {
  handleReviewModalClose: () => void;
  productSlug: string;
};

export type ReviewFormState = z.infer<typeof reviewFormSchema>;

const reviewFormInitialValues: ReviewFormState = {
  content: "",
  email: "",
  headline: "",
  name: "",
  rating: 0,
};

export const ReviewForm = ({
  handleReviewModalClose,
  productSlug,
}: ReviewFormProps) => {
  const [createProductReview] = useMutation(CreateProductReviewDocument);
  const [publishProductReview] = useMutation(PublishProductReviewDocument, {
    refetchQueries: [GetProductReviewDocument],
  });

  const methods = useForm<ReviewFormState>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(reviewFormSchema),
    defaultValues: reviewFormInitialValues,
  });
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<ReviewFormState> = async (data) => {
    const parsedFormData = reviewFormSchema.safeParse(data);

    if (parsedFormData.success) {
      try {
        const reviewFormData = parsedFormData.data;
        const { data } = await createProductReview({
          variables: {
            review: {
              ...reviewFormData,
              product: {
                connect: [
                  {
                    slug: productSlug,
                  },
                ],
              },
            },
          },
        });
        if (data?.review?.id) {
          await publishProductReview({
            variables: {
              id: data.review.id,
            },
          });
        }
        handleReviewModalClose();
        reset();
      } catch {
        console.error("An error occurred");
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="md:col-span-2">
          <ReviewFormRating />
        </div>
        <TextField
          {...register("name")}
          label="Name"
          required
          error={errors.name?.message}
        />
        <TextField
          {...register("email")}
          label="Email"
          required
          error={errors.email?.message}
        />
        <div className="md:col-span-2">
          <TextField
            {...register("headline")}
            label="Title"
            required
            error={errors.headline?.message}
          />
        </div>
        <div className="md:col-span-2">
          <TextArea
            {...register("content")}
            label="Content"
            required
            error={errors.content?.message}
          />
        </div>
        <div className="md:col-span-2 flex justify-end gap-2">
          <Button
            disabled={isSubmitting}
            type="button"
            onClick={handleReviewModalClose}
          >
            Cancel
          </Button>
          <Button disabled={isSubmitting} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
