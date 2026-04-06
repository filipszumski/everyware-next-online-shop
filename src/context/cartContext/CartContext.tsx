"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { LOCAL_STORAGE_KEYS } from "@/shared/constants/localStorageKeys";
import { getLocalStorageValue } from "@/shared/utilities/getLocalStorageValue";

import { CartItem, CartItemData, CartState } from "./types";
import { isCartItems } from "./utils";

const CartContext = createContext<CartState | null>(null);

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartState["cartItems"]>([]);

  useEffect(() => {
    const localStorageCartItems = getLocalStorageValue(
      LOCAL_STORAGE_KEYS.cartItems,
      [],
      isCartItems,
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCartItems(localStorageCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.cartItems,
      JSON.stringify(cartItems),
    );
  }, [cartItems]);

  const allCartItemsQuantity = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0,
  );

  const addItemToCart = (cartItemData: CartItemData) => {
    setCartItems((prevState) => {
      const existingItem = prevState.find(
        (cartItem) => !!cartItem && cartItem.data.id === cartItemData.id,
      );

      if (!existingItem) {
        return [
          ...prevState,
          {
            data: cartItemData,
            quantity: 1,
          },
        ];
      }

      return prevState.map((cartItem) => {
        if (cartItem.data.id === existingItem.data.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }

        return cartItem;
      });
    });
  };

  const removeItemFromCart = (id: CartItemData["id"]) => {
    setCartItems((prevState) =>
      prevState.filter((cartItem) => cartItem.data.id !== id),
    );
  };

  const updateCartItemQuantity = (
    id: CartItemData["id"],
    quantity: CartItem["quantity"],
  ) => {
    setCartItems((prevState) =>
      prevState.map((cartItem) => {
        if (cartItem.data.id === id) {
          return {
            ...cartItem,
            quantity: quantity,
          };
        }

        return cartItem;
      }),
    );
  };

  const clearCart = () => setCartItems([]);

  const summaryPrice = useMemo(() => {
    return parseFloat(
      cartItems
        .reduce((acc, item) => acc + item.data.price * item.quantity, 0)
        .toFixed(2),
    );
  }, [cartItems]);

  const value: CartState = useMemo(
    () => ({
      cartItems,
      addItemToCart,
      clearCart,
      removeItemFromCart,
      allCartItemsQuantity,
      updateCartItemQuantity,
      summaryPrice,
    }),
    [cartItems, allCartItemsQuantity, summaryPrice],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("You forgot CartContextProvider!");
  }

  return cartContext;
};
