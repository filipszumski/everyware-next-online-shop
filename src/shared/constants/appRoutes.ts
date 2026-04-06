const PRODUCTS_BASE_PATHNAME = "/products";

export const APP_ROUTES = {
  home: "/",
  products: PRODUCTS_BASE_PATHNAME,
  productsPage: `${PRODUCTS_BASE_PATHNAME}/[page]`,
  productDetails: `${PRODUCTS_BASE_PATHNAME}/details`,
  cart: "/cart",
  checkout: "/checkout",
};

export const API_ROUTES = {
  newsletter: "/api/newsletter",
};
