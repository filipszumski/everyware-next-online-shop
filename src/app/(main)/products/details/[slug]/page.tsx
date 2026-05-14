import { Metadata, ResolvingMetadata } from "next";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";
import { ProductJsonLd } from "next-seo";

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
import { APP_ROUTES, DEFAULT_TAKE } from "@/shared/constants";
import { CACHE_TAGS } from "@/shared/constants/cacheTags";
import { RATING_SCALE } from "@/shared/constants/ratingScale";
import { SEO_DEFAULTS } from "@/shared/constants/seoDefaults";

import { BackButton } from "./components/BackButton";

export default async function ProductDetailsPage({ params }: Props) {
  const slug = (await params).slug;

  if (!slug) {
    notFound();
  }

  const { data } = await getProductDetails(slug)();

  if (!data?.product) {
    notFound();
  }

  const product: ProductWithMarkdown = {
    ...data.product,
    longDescription: await serialize(data.product.longDescription),
  };

  const { name, images, description, reviews, price } = product;

  const reviewCount = reviews.length;
  const ratingValue =
    reviewCount > 0
      ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviewCount
      : 0;

  return (
    <div>
      <ProductJsonLd
        name={name}
        url={`${process.env.NEXT_PUBLIC_APP_URL}${APP_ROUTES.productDetails}/${slug}`}
        image={images.map((image) => image.url)}
        description={description}
        review={reviews.map(({ content, headline, name, rating }) => ({
          author: name,
          reviewBody: content,
          name: headline,
          reviewRating: {
            bestRating: RATING_SCALE,
            ratingValue: rating,
            worstRating: 1,
          },
        }))}
        aggregateRating={
          reviewCount > 0 ? { ratingValue, reviewCount } : undefined
        }
        offers={[
          {
            price,
            priceCurrency: "USD",
            availability: "InStock",
          },
        ]}
      />
      <div className="mb-6">
        <BackButton />
      </div>
      <ProductDetails data={product} />
    </div>
  );
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const getProductDetails = (slug: string) =>
  unstable_cache(
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

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;

  if (!slug) {
    return {};
  }

  const { data } = await getProductDetails(slug)();

  const product = data?.product;

  if (!product) {
    return {};
  }

  const { categories, description, images, name } = product;

  const previousImages = (await parent).openGraph?.images || [];
  const productImages = images.map(({ height, url, width }) => ({
    url,
    type: "image/jpeg",
    alt: name,
    height: height ?? undefined,
    width: width ?? undefined,
  }));

  return {
    title: name,
    description,
    keywords: categories.map((c) => c.name),
    openGraph: {
      type: "website",
      title: name,
      description,
      url: `${process.env.NEXT_PUBLIC_APP_URL}${APP_ROUTES.productDetails}/${slug}`,
      images: [...productImages, ...previousImages],
      siteName: SEO_DEFAULTS.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
      images: productImages.map((img) => img.url),
    },
  };
}

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
