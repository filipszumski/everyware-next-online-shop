import "@/styles/globals.css";

import { ApolloProvider } from "@apollo/client/react";
import type { AppProps } from "next/app";

import { Layout } from "@/components";
import { CartContextProvider } from "@/context/cartContext/CartContext";
import { apolloClient } from "@/graphql/apolloClient";
import { latoFont } from "@/styles/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${latoFont.style.fontFamily};
        }
      `}</style>
      <ApolloProvider client={apolloClient}>
        <CartContextProvider>
          <Layout>
            {/* TODO - TRANSFER SEO */}
            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
      </ApolloProvider>
    </>
  );
}
