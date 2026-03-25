import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/legacy/image";
import { ChangeEvent, useState } from "react";

import { useCartContext } from "@/context/cartContext/CartContext";
import { CartItem as CartItemType } from "@/context/cartContext/types";
import { useDelayedFunction } from "@/shared/hooks/useDelayedFunction";

import { Button } from "../Button";
import { TextField } from "../Form/Input/TextField";
import { Price } from "../Product/Price";

type CartItemProps = {
  item: CartItemType;
};

const ANIMATION_DURATION = 200;

export const CartItem = ({
  item: {
    data: { id, image, price, title },
    quantity,
  },
}: CartItemProps) => {
  const { removeItemFromCart, updateCartItemQuantity } = useCartContext();
  const [removingItemId, setRemovingItemId] = useState<string | null>(null);
  const [itemCount, setItemCount] = useState(quantity);

  const [delayedRemoveItemFromCart] = useDelayedFunction(
    (id: string) => {
      removeItemFromCart(id);
      setRemovingItemId(null);
    },
    [removeItemFromCart],
    ANIMATION_DURATION,
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number.parseInt(e.target.value);

    setItemCount((prev) => {
      if (!newQuantity) {
        return prev;
      }

      return newQuantity;
    });

    if (itemCount !== +e.target.value) {
      updateCartItemQuantity(id, newQuantity);
    }
  };

  return (
    <li
      key={id}
      style={{
        ...(removingItemId === id
          ? {
              transitionDuration: `${ANIMATION_DURATION.toString()}ms`,
              transitionProperty: "all",
              transitionTimingFunction: "ease-in-out",
              transform: "translateX(-100%)",
              opacity: 0,
            }
          : {
              opacity: 1,
              transform: "translateX(0%)",
            }),
      }}
      className={`
          p-4 border-solid border-2 border-borderDefault rounded-md bg-white shadow-md w-full
          flex items-center gap-4
          `}
    >
      <div className="relative aspect-square w-20">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="120px"
        />
      </div>
      <div className="flex-1 grid items-center gap-2 grid-cols-cartItemsSmall sm:grid-cols-cartItems">
        <div>{title}</div>
        <Button
          className="justify-self-end sm:order-4"
          onClick={() => {
            if (removingItemId !== null) {
              delayedRemoveItemFromCart.cancel();
            }
            setRemovingItemId(id);
            delayedRemoveItemFromCart(id);
          }}
          variant="text"
          icon={TrashIcon}
        />
        <TextField
          className="max-w-16"
          value={itemCount}
          onChange={handleInputChange}
          min={1}
          max={999}
          step={1}
          label="Qty."
          type="number"
        />
        <Price className="justify-self-end sm:order-2 font-normal text-textDefault text-base">
          {price}
        </Price>
      </div>
    </li>
  );
};
