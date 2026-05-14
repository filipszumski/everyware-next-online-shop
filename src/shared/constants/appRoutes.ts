const PRODUCTS_BASE_PATHNAME = "/products";

export const APP_ROUTES = {
  home: "/",
  products: PRODUCTS_BASE_PATHNAME,
  productDetails: `${PRODUCTS_BASE_PATHNAME}/details`,
  cart: "/cart",
  checkout: "/checkout",
  checkoutSuccess: "/checkout/success",
  checkoutCancel: "/checkout/cancel",
  signIn: "/auth/signin",
  signUp: "/auth/signup",
  orders: "/orders",
};

export const PROTECTED_ROUTES = [
  APP_ROUTES.checkout,
  APP_ROUTES.checkoutSuccess,
  APP_ROUTES.checkoutCancel,
  APP_ROUTES.orders,
] as const;

export const API_ROUTES = {
  newsletter: "/api/newsletter",
  checkout: "/api/checkout",
  signIn: "/api/auth/callback/credentials",
  reviews: "/api/reviews",
  signUp: "/api/signup",
};
