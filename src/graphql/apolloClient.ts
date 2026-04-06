import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_HYGRAPH_API_URL,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});
