"use client";

import { ApolloProvider } from "@apollo/client/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { CartContextProvider } from "@/context/cartContext/CartContext";
import { apolloClient } from "@/graphql/apolloClient";

export const Providers = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) => {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <CartContextProvider>{children}</CartContextProvider>
      </ApolloProvider>
    </SessionProvider>
  );
};
