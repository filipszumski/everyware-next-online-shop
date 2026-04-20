import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

import { Pagination, ProductsListItem } from "@/components";
import { apolloClient } from "@/graphql/apolloClient";
import {
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@/graphql/generated/graphql";
import { APP_ROUTES, DEFAULT_TAKE } from "@/shared/constants";
import { CACHE_TAGS } from "@/shared/constants/cacheTags";

type Params = Promise<{
  page: string;
}>;

export async function generateStaticParams() {
  const pages = Array.from({ length: 1 }, (_, i) => i + 1);

  return pages.map((page) => ({
    page: page.toString(),
  }));
}

export default async function ProductsPage({ params }: { params: Params }) {
  const page = (await params).page;

  if (!page) {
    notFound();
  }

  const skip = (+page - 1) * DEFAULT_TAKE;
  const getProducts = unstable_cache(
    async () =>
      apolloClient.query<GetProductsQuery, GetProductsQueryVariables>({
        variables: {
          first: DEFAULT_TAKE,
          skip,
        },
        query: GetProductsDocument,
        context: {},
      }),
    CACHE_TAGS.productsList(page),
    {
      tags: CACHE_TAGS.productsList(page),
      revalidate: 3600,
    },
  );
  const { data, error } = await getProducts();

  if (error) {
    throw error;
  }

  if (!data?.productsConnection.edges?.length) {
    notFound();
  }

  const products = data?.productsConnection.edges ?? [];
  const count = data?.productsConnection.aggregate.count ?? 0;

  return (
    <>
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.node.slug}>
            <ProductsListItem data={product} />
          </li>
        ))}
      </ul>
      <Pagination itemsCount={count} basePathname={APP_ROUTES.products} />
    </>
  );
}
