// TO DO - IS IT
"use client";

import { useQuery } from "@apollo/client/react";
import { PlusIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

import { useCartContext } from "@/context/cartContext/CartContext";
import {
  GetProductReviewDocument,
  GetProductReviewQuery,
  GetProductReviewQueryVariables,
} from "@/graphql/generated/graphql";
import { ProductWithMarkdown } from "@/graphql/products/types";

import { Button } from "../../Button";
import { Modal } from "../../Modal";
import { Rating } from "../../Rating/Rating";
import { Categories } from "../Categories";
import { Price } from "../Price";
import { ProductTabs } from "../ProductTabs/ProductTabs";
import { ReviewForm } from "./ReviewForm/ReviewForm";

type ProductDetailsProps = {
  data: ProductWithMarkdown;
};

// TODO - DOES THIS WHOLE COMPONENT NEED TO BE CLIENT? HANDLE REVIEW FORM INVALIDATION
export const ProductDetails = ({
  data: {
    description,
    images,
    price,
    name,
    slug,
    reviews,
    categories,
    longDescription,
  },
}: ProductDetailsProps) => {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const { addItemToCart } = useCartContext();
  const { data, loading } = useQuery<
    GetProductReviewQuery,
    GetProductReviewQueryVariables
  >(GetProductReviewDocument, {
    variables: {
      slug,
    },
  });

  const currentReviews = data?.product?.reviews || reviews;

  const reviewCount = currentReviews.length;
  const ratingValue =
    currentReviews.reduce((acc, review) => acc + review.rating, 0) /
    reviewCount;

  const handleReviewModalClose = () => setReviewModalOpen(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
        <div className="relative aspect-video md:aspect-square">
          <Image
            src={images[0].url}
            alt={name}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              maxWidth: "100%",
            }}
          />
        </div>
        <div className="flex flex-col justify-start gap-6">
          <div className="grid grid-cols-1 gap-2">
            <h2 className="text-3xl font-bold">{name}</h2>
            <div className="flex justify-between items-center">
              <Rating
                ratingValue={ratingValue}
                reviewCount={reviewCount}
                displayMode="scale"
                isLoading={loading}
              />
              <Button
                variant="text"
                icon={PlusIcon}
                onClick={() => setReviewModalOpen(true)}
              >
                Review
              </Button>
            </div>
            <Price className="text-lg">{price}</Price>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div>{description}</div>
            <Categories categories={categories} />
          </div>
          <Button
            icon={ShoppingCartIcon}
            variant="contained"
            onClick={() =>
              addItemToCart({
                id: slug,
                price: price,
                title: name,
                image: images[0].url,
              })
            }
          >
            Add to cart
          </Button>
        </div>
        <ProductTabs
          longDescription={longDescription}
          reviews={currentReviews}
        />
      </div>
      <Modal
        open={reviewModalOpen}
        setOpen={setReviewModalOpen}
        title="Add new review"
        description="Fill form to add new review"
      >
        <ReviewForm
          handleReviewModalClose={handleReviewModalClose}
          productSlug={slug}
        />
      </Modal>
    </>
  );
};
