"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/Button";
import { useCartContext } from "@/context/cartContext/CartContext";

import { ProductsListItem } from ".";

type Props = Pick<
  React.ComponentProps<typeof ProductsListItem>["data"]["node"],
  "slug" | "price" | "name" | "images"
>;

export function AddToCartButton({ slug, price, name, images }: Props) {
  const { addItemToCart } = useCartContext();

  return (
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
  );
}
