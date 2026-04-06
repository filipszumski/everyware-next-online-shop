export const CACHE_TAGS = {
  productsAll: ["products"],
  productsLists: () => [...CACHE_TAGS.productsAll, "lists"],
  productsList: (filters: string) => [...CACHE_TAGS.productsLists(), filters],
  productsDetails: () => [...CACHE_TAGS.productsAll, "details"],
  productDetails: (slug: string) => [...CACHE_TAGS.productsDetails(), slug],
} as const;
