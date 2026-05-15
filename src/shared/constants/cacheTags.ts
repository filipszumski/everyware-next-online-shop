export const CACHE_TAGS = {
  productsAll: "products",
  productsLists: () => `${CACHE_TAGS.productsAll}-lists`,
  productsList: (page: string) => `${CACHE_TAGS.productsLists()}-${page}`,
  productsDetails: () => `${CACHE_TAGS.productsAll}-details`,
  productDetails: (slug: string) => `${CACHE_TAGS.productsDetails()}-${slug}`,
  productsReviews: () => `${CACHE_TAGS.productsAll}-reviews`,
  productReviews: (slug: string) => `${CACHE_TAGS.productsReviews()}-${slug}`,

  accountDetails: (email: string) => `accountDetails-${email}`,
  accountOrders: (email: string) => `accountOrders-${email}`,
} as const;
