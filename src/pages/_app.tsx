import "@/styles/globals.css";

import { ApolloProvider } from "@apollo/client/react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { Layout } from "@/components";
import { CartContextProvider } from "@/context/cartContext/CartContext";
import { apolloClient } from "@/graphql/apolloClient";
import { latoFont } from "@/styles/fonts";

import SEO from "../../next-seo.config";

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
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
      </ApolloProvider>
    </>
  );
}
