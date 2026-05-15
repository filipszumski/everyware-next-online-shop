"use client";

import { ApolloNextAppProvider } from "@apollo/client-integration-nextjs";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { CartContextProvider } from "@/context/cartContext/CartContext";
import { makeClient } from "@/graphql/apolloClient";

export const Providers = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) => {
  return (
    <SessionProvider session={session}>
      <ApolloNextAppProvider makeClient={makeClient}>
        <CartContextProvider>{children}</CartContextProvider>
      </ApolloNextAppProvider>
    </SessionProvider>
  );
};
