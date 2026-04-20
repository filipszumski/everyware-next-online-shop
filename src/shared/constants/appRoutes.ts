const PRODUCTS_BASE_PATHNAME = "/products";

export const APP_ROUTES = {
  home: "/",
  products: PRODUCTS_BASE_PATHNAME,
  productDetails: `${PRODUCTS_BASE_PATHNAME}/details`,
  cart: "/cart",
  checkout: "/checkout",
  checkoutSuccess: "/checkout/success",
  checkoutCancel: "/checkout/cancel",
};

export const API_ROUTES = {
  newsletter: "/api/newsletter",
  checkout: "/api/checkout",
};
