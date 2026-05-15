/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AccountCreateInput = {
  createdAt?: unknown;
  email: string;
  name: string;
  orders?: OrderCreateManyInlineInput | null | undefined;
  password?: string | null | undefined;
  updatedAt?: unknown;
};

/** References Account record uniquely */
export type AccountWhereUniqueInput = {
  email?: string | null | undefined;
  id?: string | number | null | undefined;
};

export type AssetCreateInput = {
  createdAt?: unknown;
  fileName?: string | null | undefined;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: AssetCreateLocalizationsInput | null | undefined;
  productImages?: ProductCreateManyInlineInput | null | undefined;
  updatedAt?: unknown;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: string | null | undefined;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: unknown;
  fileName?: string | null | undefined;
  updatedAt?: unknown;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: string | null | undefined;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Array<AssetCreateLocalizationInput> | null | undefined;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Array<AssetWhereUniqueInput> | null | undefined;
  /** Create and connect multiple existing Asset documents */
  create?: Array<AssetCreateInput> | null | undefined;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: string | number | null | undefined;
};

export type CategoryCreateInput = {
  createdAt?: unknown;
  /** description input for default locale (en) */
  description?: string | null | undefined;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: CategoryCreateLocalizationsInput | null | undefined;
  /** name input for default locale (en) */
  name: string;
  products?: ProductCreateManyInlineInput | null | undefined;
  /** slug input for default locale (en) */
  slug: string;
  updatedAt?: unknown;
};

export type CategoryCreateLocalizationDataInput = {
  createdAt?: unknown;
  description?: string | null | undefined;
  name: string;
  slug: string;
  updatedAt?: unknown;
};

export type CategoryCreateLocalizationInput = {
  /** Localization input */
  data: CategoryCreateLocalizationDataInput;
  locale: Locale;
};

export type CategoryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Array<CategoryCreateLocalizationInput> | null | undefined;
};

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: Array<CategoryWhereUniqueInput> | null | undefined;
  /** Create and connect multiple existing Category documents */
  create?: Array<CategoryCreateInput> | null | undefined;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: string | number | null | undefined;
};

export type CollectionCreateInput = {
  createdAt?: unknown;
  /** description input for default locale (en) */
  description?: string | null | undefined;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: CollectionCreateLocalizationsInput | null | undefined;
  /** name input for default locale (en) */
  name: string;
  products?: ProductCreateManyInlineInput | null | undefined;
  /** slug input for default locale (en) */
  slug: string;
  updatedAt?: unknown;
};

export type CollectionCreateLocalizationDataInput = {
  createdAt?: unknown;
  description?: string | null | undefined;
  name: string;
  slug: string;
  updatedAt?: unknown;
};

export type CollectionCreateLocalizationInput = {
  /** Localization input */
  data: CollectionCreateLocalizationDataInput;
  locale: Locale;
};

export type CollectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Array<CollectionCreateLocalizationInput> | null | undefined;
};

export type CollectionCreateManyInlineInput = {
  /** Connect multiple existing Collection documents */
  connect?: Array<CollectionWhereUniqueInput> | null | undefined;
  /** Create and connect multiple existing Collection documents */
  create?: Array<CollectionCreateInput> | null | undefined;
};

/** References Collection record uniquely */
export type CollectionWhereUniqueInput = {
  id?: string | number | null | undefined;
};

/** Locale system enumeration */
export type Locale =
  | 'de'
  /** System locale */
  | 'en';

export type OrderCreateInput = {
  account?: OrdersAccount_2r4l9CreateOneInlineInput | null | undefined;
  createdAt?: unknown;
  email: string;
  orderItems?: OrderItemCreateManyInlineInput | null | undefined;
  stripeCheckoutId: string;
  total: number;
  updatedAt?: unknown;
};

export type OrderCreateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect?: Array<OrderWhereUniqueInput> | null | undefined;
  /** Create and connect multiple existing Order documents */
  create?: Array<OrderCreateInput> | null | undefined;
};

export type OrderCreateOneInlineInput = {
  /** Connect one existing Order document */
  connect?: OrderWhereUniqueInput | null | undefined;
  /** Create and connect one Order document */
  create?: OrderCreateInput | null | undefined;
};

export type OrderItemCreateInput = {
  createdAt?: unknown;
  order?: OrderCreateOneInlineInput | null | undefined;
  product?: ProductCreateOneInlineInput | null | undefined;
  quantity: number;
  total: number;
  updatedAt?: unknown;
};

export type OrderItemCreateManyInlineInput = {
  /** Connect multiple existing OrderItem documents */
  connect?: Array<OrderItemWhereUniqueInput> | null | undefined;
  /** Create and connect multiple existing OrderItem documents */
  create?: Array<OrderItemCreateInput> | null | undefined;
};

/** References OrderItem record uniquely */
export type OrderItemWhereUniqueInput = {
  id?: string | number | null | undefined;
};

/** References Order record uniquely */
export type OrderWhereUniqueInput = {
  id?: string | number | null | undefined;
};

export type ProductColor =
  | 'BLACK'
  | 'PINK'
  | 'PURPLE';

export type ProductColorVariantCreateInput = {
  color: ProductColor;
  createdAt?: unknown;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: ProductColorVariantCreateLocalizationsInput | null | undefined;
  /** name input for default locale (en) */
  name: string;
  product?: ProductCreateManyInlineInput | null | undefined;
  updatedAt?: unknown;
};

export type ProductColorVariantCreateLocalizationDataInput = {
  createdAt?: unknown;
  name: string;
  updatedAt?: unknown;
};

export type ProductColorVariantCreateLocalizationInput = {
  /** Localization input */
  data: ProductColorVariantCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductColorVariantCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Array<ProductColorVariantCreateLocalizationInput> | null | undefined;
};

/** References ProductColorVariant record uniquely */
export type ProductColorVariantWhereUniqueInput = {
  id?: string | number | null | undefined;
};

export type ProductCreateInput = {
  categories?: CategoryCreateManyInlineInput | null | undefined;
  collections?: CollectionCreateManyInlineInput | null | undefined;
  createdAt?: unknown;
  /** description input for default locale (en) */
  description: string;
  images?: AssetCreateManyInlineInput | null | undefined;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: ProductCreateLocalizationsInput | null | undefined;
  /** longDescription input for default locale (en) */
  longDescription: string;
  /** name input for default locale (en) */
  name: string;
  orderItems?: OrderItemCreateManyInlineInput | null | undefined;
  /** price input for default locale (en) */
  price: number;
  reviews?: ReviewCreateManyInlineInput | null | undefined;
  slug: string;
  updatedAt?: unknown;
  variants?: ProductVariantsCreateManyInlineInput | null | undefined;
};

export type ProductCreateLocalizationDataInput = {
  createdAt?: unknown;
  description: string;
  longDescription: string;
  name: string;
  price: number;
  updatedAt?: unknown;
};

export type ProductCreateLocalizationInput = {
  /** Localization input */
  data: ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Array<ProductCreateLocalizationInput> | null | undefined;
};

export type ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: Array<ProductWhereUniqueInput> | null | undefined;
  /** Create and connect multiple existing Product documents */
  create?: Array<ProductCreateInput> | null | undefined;
};

export type ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect?: ProductWhereUniqueInput | null | undefined;
  /** Create and connect one Product document */
  create?: ProductCreateInput | null | undefined;
};

export type ProductSize =
  | 'LARGE'
  | 'MEDIUM'
  | 'SMALL'
  | 'XL'
  | 'XS';

export type ProductSizeColorVariantCreateInput = {
  color: ProductColor;
  createdAt?: unknown;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: ProductSizeColorVariantCreateLocalizationsInput | null | undefined;
  /** name input for default locale (en) */
  name: string;
  product?: ProductCreateManyInlineInput | null | undefined;
  size: ProductSize;
  updatedAt?: unknown;
};

export type ProductSizeColorVariantCreateLocalizationDataInput = {
  createdAt?: unknown;
  name: string;
  updatedAt?: unknown;
};

export type ProductSizeColorVariantCreateLocalizationInput = {
  /** Localization input */
  data: ProductSizeColorVariantCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductSizeColorVariantCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Array<ProductSizeColorVariantCreateLocalizationInput> | null | undefined;
};

/** References ProductSizeColorVariant record uniquely */
export type ProductSizeColorVariantWhereUniqueInput = {
  id?: string | number | null | undefined;
};

export type ProductSizeVariantCreateInput = {
  createdAt?: unknown;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: ProductSizeVariantCreateLocalizationsInput | null | undefined;
  /** name input for default locale (en) */
  name: string;
  product?: ProductCreateManyInlineInput | null | undefined;
  size: ProductSize;
  updatedAt?: unknown;
};

export type ProductSizeVariantCreateLocalizationDataInput = {
  createdAt?: unknown;
  name: string;
  updatedAt?: unknown;
};

export type ProductSizeVariantCreateLocalizationInput = {
  /** Localization input */
  data: ProductSizeVariantCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductSizeVariantCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Array<ProductSizeVariantCreateLocalizationInput> | null | undefined;
};

/** References ProductSizeVariant record uniquely */
export type ProductSizeVariantWhereUniqueInput = {
  id?: string | number | null | undefined;
};

export type ProductVariantsCreateInput = {
  ProductColorVariant?: ProductColorVariantCreateInput | null | undefined;
  ProductSizeColorVariant?: ProductSizeColorVariantCreateInput | null | undefined;
  ProductSizeVariant?: ProductSizeVariantCreateInput | null | undefined;
};

export type ProductVariantsCreateManyInlineInput = {
  /** Connect multiple existing ProductVariants documents */
  connect?: Array<ProductVariantsWhereUniqueInput> | null | undefined;
  /** Create and connect multiple existing ProductVariants documents */
  create?: Array<ProductVariantsCreateInput> | null | undefined;
};

export type ProductVariantsWhereUniqueInput = {
  ProductColorVariant?: ProductColorVariantWhereUniqueInput | null | undefined;
  ProductSizeColorVariant?: ProductSizeColorVariantWhereUniqueInput | null | undefined;
  ProductSizeVariant?: ProductSizeVariantWhereUniqueInput | null | undefined;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: string | number | null | undefined;
  slug?: string | null | undefined;
};

export type ReviewCreateInput = {
  content: string;
  createdAt?: unknown;
  email: string;
  headline: string;
  name: string;
  product?: ProductCreateManyInlineInput | null | undefined;
  rating: number;
  updatedAt?: unknown;
};

export type ReviewCreateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: Array<ReviewWhereUniqueInput> | null | undefined;
  /** Create and connect multiple existing Review documents */
  create?: Array<ReviewCreateInput> | null | undefined;
};

/** References Review record uniquely */
export type ReviewWhereUniqueInput = {
  id?: string | number | null | undefined;
};

export type OrdersAccount_2r4l9CreateInput = {
  Account?: AccountCreateInput | null | undefined;
};

export type OrdersAccount_2r4l9CreateOneInlineInput = {
  /** Connect one existing ordersAccount_2r4l9 document */
  connect?: OrdersAccount_2r4l9WhereUniqueInput | null | undefined;
  /** Create and connect one ordersAccount_2r4l9 document */
  create?: OrdersAccount_2r4l9CreateInput | null | undefined;
};

export type OrdersAccount_2r4l9WhereUniqueInput = {
  Account?: AccountWhereUniqueInput | null | undefined;
};

export type CreateAccountMutationVariables = Exact<{
  email: string;
  password: string;
  name: string;
}>;


export type CreateAccountMutation = { createAccount: { id: string } | null };

export type CreateOrderMutationVariables = Exact<{
  order: OrderCreateInput;
}>;


export type CreateOrderMutation = { createOrder: { id: string } | null };

export type CreateProductReviewMutationVariables = Exact<{
  review: ReviewCreateInput;
}>;


export type CreateProductReviewMutation = { review: { id: string } | null };

export type PublishAccountMutationVariables = Exact<{
  email: string;
  id: string | number;
}>;


export type PublishAccountMutation = { publishAccount: { id: string } | null };

export type PublishManyOrderItemsMutationVariables = Exact<{
  orderId: string | number;
}>;


export type PublishManyOrderItemsMutation = { publishManyOrderItemsConnection: { edges: Array<{ node: { id: string } }> } };

export type PublishOrderMutationVariables = Exact<{
  id: string | number;
}>;


export type PublishOrderMutation = { publishOrder: { id: string } | null };

export type PublishProductMutationVariables = Exact<{
  slug: string;
}>;


export type PublishProductMutation = { publishProduct: { id: string } | null };

export type PublishProductReviewMutationVariables = Exact<{
  id: string | number;
}>;


export type PublishProductReviewMutation = { publishReview: { id: string } | null };

export type GetAccountOrdersQueryVariables = Exact<{
  email: string;
}>;


export type GetAccountOrdersQuery = { account: { orders: Array<{ id: string, total: number, orderItems: Array<{ quantity: number, total: number, product: { id: string, name: string, images: Array<{ url: string }> } | null }> }> } | null };

export type GetAccountQueryVariables = Exact<{
  email: string;
}>;


export type GetAccountQuery = { account: { id: string, email: string, name: string, password: string | null } | null };

export type GetProductQueryVariables = Exact<{
  slug?: string | null | undefined;
}>;


export type GetProductQuery = { product: { id: string, slug: string, description: string, longDescription: string, name: string, price: number, images: Array<{ url: string, height: number | null, width: number | null }>, reviews: Array<{ content: string, headline: string, id: string, name: string, rating: number, email: string }>, categories: Array<{ name: string, slug: string }> } | null };

export type GetProductReviewQueryVariables = Exact<{
  slug: string;
}>;


export type GetProductReviewQuery = { product: { reviews: Array<{ headline: string, email: string, content: string, name: string, rating: number, id: string }> } | null };

export type GetProductsBySlugQueryVariables = Exact<{
  slugs: Array<string> | string;
}>;


export type GetProductsBySlugQuery = { products: Array<{ id: string, slug: string, name: string, price: number, images: Array<{ url: string }> }> };

export type GetProductsQueryVariables = Exact<{
  first?: number | null | undefined;
  skip?: number | null | undefined;
}>;


export type GetProductsQuery = { productsConnection: { aggregate: { count: number }, edges: Array<{ node: { slug: string, name: string, price: number, images: Array<{ url: string }>, reviews: Array<{ rating: number, id: string }> } }> } };

export type GetProductsSlugsQueryVariables = Exact<{
  first?: number | null | undefined;
}>;


export type GetProductsSlugsQuery = { products: Array<{ slug: string }> };


export const CreateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAccountMutation, CreateAccountMutationVariables>;
export const CreateOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateProductReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProductReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"review"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReviewCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"review"},"name":{"kind":"Name","value":"createReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"review"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateProductReviewMutation, CreateProductReviewMutationVariables>;
export const PublishAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PublishAccountMutation, PublishAccountMutationVariables>;
export const PublishManyOrderItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishManyOrderItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishManyOrderItemsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"EnumValue","value":"PUBLISHED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PublishManyOrderItemsMutation, PublishManyOrderItemsMutationVariables>;
export const PublishOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"EnumValue","value":"PUBLISHED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PublishOrderMutation, PublishOrderMutationVariables>;
export const PublishProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"to"},"value":{"kind":"EnumValue","value":"PUBLISHED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PublishProductMutation, PublishProductMutationVariables>;
export const PublishProductReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishProductReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PublishProductReviewMutation, PublishProductReviewMutationVariables>;
export const GetAccountOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAccountOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"orderItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAccountOrdersQuery, GetAccountOrdersQueryVariables>;
export const GetAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}}]} as unknown as DocumentNode<GetAccountQuery, GetAccountQueryVariables>;
export const GetProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"longDescription"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;
export const GetProductReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headline"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductReviewQuery, GetProductReviewQueryVariables>;
export const GetProductsBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductsBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slugs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slugs"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsBySlugQuery, GetProductsBySlugQueryVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductsSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductsSlugs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>;