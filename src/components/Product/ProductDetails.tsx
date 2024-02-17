import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { NextSeo, ProductJsonLd } from "next-seo";

import { useCartContext } from "@/context/cartContext/CartContext";
import { ProductWithMarkdown } from "@/graphql/products/types";
import { APP_ROUTES } from "@/shared/constants";
import { SEO_DEFAULTS } from "@/shared/constants/seoDefaults";

import { Button } from "../Button";
import { Rating } from "../Rating/Rating";
import { Categories } from "./Categories";
import { Price } from "./Price";
import { ProductTabs } from "./ProductTabs/ProductTabs";

type ProductDetailsProps = {
  data: ProductWithMarkdown;
};

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
  const { addItemToCart } = useCartContext();

  const reviewCount = reviews.length;
  const ratingValue =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviewCount;

  return (
    <>
      <NextSeo
        title={name}
        description={description}
        canonical={`${process.env.NEXT_PUBLIC_APP_URL}${APP_ROUTES.productsDetails}/${slug}`}
        openGraph={{
          type: "product",
          title: name,
          description: description,
          url: `${process.env.NEXT_PUBLIC_APP_URL}${APP_ROUTES.productsDetails}/${slug}`,
          images: images.map(({ height, url, width }) => ({
            url,
            type: "image/jpeg",
            alt: name,
            height,
            width,
          })),
          siteName: SEO_DEFAULTS.siteName,
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <ProductJsonLd
        productName={name}
        images={images.map((image) => image.url)}
        description={description}
        reviews={reviews.map(({ content, headline, name, rating }) => ({
          author: name,
          reviewBody: content,
          name: headline,
          reviewRating: {
            bestRating: "5",
            ratingValue: rating,
            worstRating: "1",
          },
        }))}
        aggregateRating={{
          ratingValue: ratingValue,
          reviewCount: reviewCount,
        }}
        offers={[
          {
            price,
            priceCurrency: "USD",
          },
        ]}
      />
      <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
        <div className="relative aspect-video md:aspect-square">
          <Image
            src={images[0].url}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-start gap-6">
          <div className="grid grid-cols-1 gap-2">
            <h2 className="text-3xl font-bold">{name}</h2>
            <Rating
              ratingValue={ratingValue}
              reviewCount={reviewCount}
              displayMode="scale"
            />
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
        <ProductTabs longDescription={longDescription} reviews={reviews} />
      </div>
    </>
  );
};
