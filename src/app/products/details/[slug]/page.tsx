import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";

import { ProductDetails } from "@/components";
import { apolloClient } from "@/graphql/apolloClient";
import {
  GetProductDocument,
  GetProductQuery,
  GetProductQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
  GetProductsSlugsQueryVariables,
} from "@/graphql/generated/graphql";
import { ProductWithMarkdown } from "@/graphql/products/types";
import { DEFAULT_TAKE } from "@/shared/constants";
import { CACHE_TAGS } from "@/shared/constants/cacheTags";

import { BackButton } from "./components/BackButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const getProductsSlugs = unstable_cache(
    async () => {
      const { data } = await apolloClient.query<
        GetProductsSlugsQuery,
        GetProductsSlugsQueryVariables
      >({
        query: GetProductsSlugsDocument,
        variables: {
          first: DEFAULT_TAKE,
        },
      });

      if (!data?.products) {
        return [];
      }

      return data.products.map(({ slug }) => slug);
    },
    CACHE_TAGS.productsList("1"),
    {
      tags: CACHE_TAGS.productsList("1"),
      revalidate: 60,
    },
  );

  const slugs = await getProductsSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ProductDetailsPage({ params }: Props) {
  const slug = (await params).slug;

  if (!slug) {
    notFound();
  }

  const getProductDetails = unstable_cache(
    async () =>
      apolloClient.query<GetProductQuery, GetProductQueryVariables>({
        variables: {
          slug,
        },
        query: GetProductDocument,
      }),
    CACHE_TAGS.productDetails(slug),
    {
      tags: CACHE_TAGS.productDetails(slug),
      revalidate: 60,
    },
  );

  const { data } = await getProductDetails();

  if (!data?.product) {
    notFound();
  }

  const product: ProductWithMarkdown = {
    ...data.product,
    longDescription: await serialize(data.product.longDescription),
  };
  return (
    <div>
      <div className="mb-6">
        <BackButton />
      </div>
      <ProductDetails data={product} />
    </div>
  );
}
