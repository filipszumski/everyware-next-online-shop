import { HttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client-integration-nextjs";

// For client components (browser & SSR)
export function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_HYGRAPH_API_URL,
    fetchOptions: {
      next: {
        revalidate: 60,
      },
    },
  });
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}
