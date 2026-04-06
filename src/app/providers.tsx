"use client";

import { ApolloProvider } from "@apollo/client/react";

import { CartContextProvider } from "@/context/cartContext/CartContext";
import { apolloClient } from "@/graphql/apolloClient";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <CartContextProvider>{children}</CartContextProvider>
    </ApolloProvider>
  );
};
