import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/legacy/image";
import Link from "next/link";

import { useCartContext } from "@/context/cartContext/CartContext";
import { GetProductsQuery } from "@/graphql/generated/graphql";
import { APP_ROUTES } from "@/shared/constants";

import { Button } from "../Button";
import { Rating } from "../Rating/Rating";
import { Price } from "./Price";

type ProductsListItemProps = {
  data: GetProductsQuery["productsConnection"]["edges"][number];
};

export const ProductsListItem = ({
  data: {
    node: { images, name, price, slug, reviews },
  },
}: ProductsListItemProps) => {
  const { addItemToCart } = useCartContext();

  const reviewCount = reviews.length;
  const ratingValue =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviewCount;

  return (
    <div className="bg-white rounded-xl shadow-md grid grid-cols-1 p-4 gap-4 transition-transform ease-in-out duration-150 hover:scale-105">
      <Link
        className="grid grid-cols-1 gap-4"
        href={{ pathname: APP_ROUTES.productDetails, query: { slug } }}
      >
        <div className="relative aspect-square">
          <Image
            src={images[0].url}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="flex items-center justify-between">
          <Price>{price}</Price>
          <Rating
            ratingValue={ratingValue}
            reviewCount={reviewCount}
            displayMode="icon"
          />
        </div>
      </Link>
      <Button
        icon={ShoppingCartIcon}
        fullWidth
        variant="outlined"
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
  );
};
