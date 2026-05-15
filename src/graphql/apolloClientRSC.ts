import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/client-integration-nextjs";

// For React Server Components (RSC)
export const { getClient, query, PreloadQuery } = registerApolloClient(
  () =>
    new ApolloClient({
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_HYGRAPH_API_URL,
        fetchOptions: {
          next: {
            revalidate: 60,
          },
        },
      }),
      cache: new InMemoryCache(),
    }),
);

// For authorized RSC queries (server-side with auth token)
export const { getClient: getAuthorizedClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_HYGRAPH_API_URL,
      fetchOptions: {
        next: {
          revalidate: 0,
        },
      },
      headers: {
        Authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
      },
    }),
    cache: new InMemoryCache(),
  });
});
