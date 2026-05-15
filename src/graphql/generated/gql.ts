/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation CreateAccount($email: String!, $password: String!, $name: String!) {\n  createAccount(data: {email: $email, password: $password, name: $name}) {\n    id\n  }\n}": typeof types.CreateAccountDocument,
    "mutation CreateOrder($order: OrderCreateInput!) {\n  createOrder(data: $order) {\n    id\n  }\n}": typeof types.CreateOrderDocument,
    "mutation CreateProductReview($review: ReviewCreateInput!) {\n  review: createReview(data: $review) {\n    id\n  }\n}": typeof types.CreateProductReviewDocument,
    "mutation PublishAccount($email: String!, $id: ID!) {\n  publishAccount(where: {id: $id, email: $email}) {\n    id\n  }\n}": typeof types.PublishAccountDocument,
    "mutation PublishManyOrderItems($orderId: ID!) {\n  publishManyOrderItemsConnection(where: {order: {id: $orderId}}, to: PUBLISHED) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}": typeof types.PublishManyOrderItemsDocument,
    "mutation PublishOrder($id: ID!) {\n  publishOrder(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}": typeof types.PublishOrderDocument,
    "mutation PublishProduct($slug: String!) {\n  publishProduct(where: {slug: $slug}, to: PUBLISHED) {\n    id\n  }\n}": typeof types.PublishProductDocument,
    "mutation PublishProductReview($id: ID!) {\n  publishReview(where: {id: $id}) {\n    id\n  }\n}": typeof types.PublishProductReviewDocument,
    "query GetAccountOrders($email: String!) {\n  account(where: {email: $email}) {\n    orders {\n      id\n      total\n      orderItems {\n        quantity\n        total\n        product {\n          id\n          name\n          images {\n            url\n          }\n        }\n      }\n    }\n  }\n}": typeof types.GetAccountOrdersDocument,
    "query GetAccount($email: String!) {\n  account(where: {email: $email}) {\n    id\n    email\n    name\n    password\n  }\n}": typeof types.GetAccountDocument,
    "query GetProduct($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    slug\n    description\n    longDescription\n    name\n    price\n    images {\n      url\n      height\n      width\n    }\n    reviews {\n      content\n      headline\n      id\n      name\n      rating\n      email\n    }\n    categories {\n      name\n      slug\n    }\n  }\n}": typeof types.GetProductDocument,
    "query GetProductReview($slug: String!) {\n  product(where: {slug: $slug}) {\n    reviews {\n      headline\n      email\n      content\n      name\n      rating\n      id\n    }\n  }\n}": typeof types.GetProductReviewDocument,
    "query GetProductsBySlug($slugs: [String!]!) {\n  products(where: {slug_in: $slugs}) {\n    id\n    slug\n    name\n    price\n    images(first: 1) {\n      url\n    }\n  }\n}": typeof types.GetProductsBySlugDocument,
    "query GetProducts($first: Int, $skip: Int) {\n  productsConnection(first: $first, skip: $skip) {\n    aggregate {\n      count\n    }\n    edges {\n      node {\n        slug\n        name\n        price\n        images(first: 1) {\n          url\n        }\n        reviews {\n          rating\n          id\n        }\n      }\n    }\n  }\n}": typeof types.GetProductsDocument,
    "query GetProductsSlugs($first: Int) {\n  products(first: $first, skip: 0) {\n    slug\n  }\n}": typeof types.GetProductsSlugsDocument,
};
const documents: Documents = {
    "mutation CreateAccount($email: String!, $password: String!, $name: String!) {\n  createAccount(data: {email: $email, password: $password, name: $name}) {\n    id\n  }\n}": types.CreateAccountDocument,
    "mutation CreateOrder($order: OrderCreateInput!) {\n  createOrder(data: $order) {\n    id\n  }\n}": types.CreateOrderDocument,
    "mutation CreateProductReview($review: ReviewCreateInput!) {\n  review: createReview(data: $review) {\n    id\n  }\n}": types.CreateProductReviewDocument,
    "mutation PublishAccount($email: String!, $id: ID!) {\n  publishAccount(where: {id: $id, email: $email}) {\n    id\n  }\n}": types.PublishAccountDocument,
    "mutation PublishManyOrderItems($orderId: ID!) {\n  publishManyOrderItemsConnection(where: {order: {id: $orderId}}, to: PUBLISHED) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}": types.PublishManyOrderItemsDocument,
    "mutation PublishOrder($id: ID!) {\n  publishOrder(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}": types.PublishOrderDocument,
    "mutation PublishProduct($slug: String!) {\n  publishProduct(where: {slug: $slug}, to: PUBLISHED) {\n    id\n  }\n}": types.PublishProductDocument,
    "mutation PublishProductReview($id: ID!) {\n  publishReview(where: {id: $id}) {\n    id\n  }\n}": types.PublishProductReviewDocument,
    "query GetAccountOrders($email: String!) {\n  account(where: {email: $email}) {\n    orders {\n      id\n      total\n      orderItems {\n        quantity\n        total\n        product {\n          id\n          name\n          images {\n            url\n          }\n        }\n      }\n    }\n  }\n}": types.GetAccountOrdersDocument,
    "query GetAccount($email: String!) {\n  account(where: {email: $email}) {\n    id\n    email\n    name\n    password\n  }\n}": types.GetAccountDocument,
    "query GetProduct($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    slug\n    description\n    longDescription\n    name\n    price\n    images {\n      url\n      height\n      width\n    }\n    reviews {\n      content\n      headline\n      id\n      name\n      rating\n      email\n    }\n    categories {\n      name\n      slug\n    }\n  }\n}": types.GetProductDocument,
    "query GetProductReview($slug: String!) {\n  product(where: {slug: $slug}) {\n    reviews {\n      headline\n      email\n      content\n      name\n      rating\n      id\n    }\n  }\n}": types.GetProductReviewDocument,
    "query GetProductsBySlug($slugs: [String!]!) {\n  products(where: {slug_in: $slugs}) {\n    id\n    slug\n    name\n    price\n    images(first: 1) {\n      url\n    }\n  }\n}": types.GetProductsBySlugDocument,
    "query GetProducts($first: Int, $skip: Int) {\n  productsConnection(first: $first, skip: $skip) {\n    aggregate {\n      count\n    }\n    edges {\n      node {\n        slug\n        name\n        price\n        images(first: 1) {\n          url\n        }\n        reviews {\n          rating\n          id\n        }\n      }\n    }\n  }\n}": types.GetProductsDocument,
    "query GetProductsSlugs($first: Int) {\n  products(first: $first, skip: 0) {\n    slug\n  }\n}": types.GetProductsSlugsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateAccount($email: String!, $password: String!, $name: String!) {\n  createAccount(data: {email: $email, password: $password, name: $name}) {\n    id\n  }\n}"): (typeof documents)["mutation CreateAccount($email: String!, $password: String!, $name: String!) {\n  createAccount(data: {email: $email, password: $password, name: $name}) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateOrder($order: OrderCreateInput!) {\n  createOrder(data: $order) {\n    id\n  }\n}"): (typeof documents)["mutation CreateOrder($order: OrderCreateInput!) {\n  createOrder(data: $order) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateProductReview($review: ReviewCreateInput!) {\n  review: createReview(data: $review) {\n    id\n  }\n}"): (typeof documents)["mutation CreateProductReview($review: ReviewCreateInput!) {\n  review: createReview(data: $review) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation PublishAccount($email: String!, $id: ID!) {\n  publishAccount(where: {id: $id, email: $email}) {\n    id\n  }\n}"): (typeof documents)["mutation PublishAccount($email: String!, $id: ID!) {\n  publishAccount(where: {id: $id, email: $email}) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation PublishManyOrderItems($orderId: ID!) {\n  publishManyOrderItemsConnection(where: {order: {id: $orderId}}, to: PUBLISHED) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}"): (typeof documents)["mutation PublishManyOrderItems($orderId: ID!) {\n  publishManyOrderItemsConnection(where: {order: {id: $orderId}}, to: PUBLISHED) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation PublishOrder($id: ID!) {\n  publishOrder(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}"): (typeof documents)["mutation PublishOrder($id: ID!) {\n  publishOrder(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation PublishProduct($slug: String!) {\n  publishProduct(where: {slug: $slug}, to: PUBLISHED) {\n    id\n  }\n}"): (typeof documents)["mutation PublishProduct($slug: String!) {\n  publishProduct(where: {slug: $slug}, to: PUBLISHED) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation PublishProductReview($id: ID!) {\n  publishReview(where: {id: $id}) {\n    id\n  }\n}"): (typeof documents)["mutation PublishProductReview($id: ID!) {\n  publishReview(where: {id: $id}) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAccountOrders($email: String!) {\n  account(where: {email: $email}) {\n    orders {\n      id\n      total\n      orderItems {\n        quantity\n        total\n        product {\n          id\n          name\n          images {\n            url\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetAccountOrders($email: String!) {\n  account(where: {email: $email}) {\n    orders {\n      id\n      total\n      orderItems {\n        quantity\n        total\n        product {\n          id\n          name\n          images {\n            url\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAccount($email: String!) {\n  account(where: {email: $email}) {\n    id\n    email\n    name\n    password\n  }\n}"): (typeof documents)["query GetAccount($email: String!) {\n  account(where: {email: $email}) {\n    id\n    email\n    name\n    password\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProduct($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    slug\n    description\n    longDescription\n    name\n    price\n    images {\n      url\n      height\n      width\n    }\n    reviews {\n      content\n      headline\n      id\n      name\n      rating\n      email\n    }\n    categories {\n      name\n      slug\n    }\n  }\n}"): (typeof documents)["query GetProduct($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    slug\n    description\n    longDescription\n    name\n    price\n    images {\n      url\n      height\n      width\n    }\n    reviews {\n      content\n      headline\n      id\n      name\n      rating\n      email\n    }\n    categories {\n      name\n      slug\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductReview($slug: String!) {\n  product(where: {slug: $slug}) {\n    reviews {\n      headline\n      email\n      content\n      name\n      rating\n      id\n    }\n  }\n}"): (typeof documents)["query GetProductReview($slug: String!) {\n  product(where: {slug: $slug}) {\n    reviews {\n      headline\n      email\n      content\n      name\n      rating\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsBySlug($slugs: [String!]!) {\n  products(where: {slug_in: $slugs}) {\n    id\n    slug\n    name\n    price\n    images(first: 1) {\n      url\n    }\n  }\n}"): (typeof documents)["query GetProductsBySlug($slugs: [String!]!) {\n  products(where: {slug_in: $slugs}) {\n    id\n    slug\n    name\n    price\n    images(first: 1) {\n      url\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProducts($first: Int, $skip: Int) {\n  productsConnection(first: $first, skip: $skip) {\n    aggregate {\n      count\n    }\n    edges {\n      node {\n        slug\n        name\n        price\n        images(first: 1) {\n          url\n        }\n        reviews {\n          rating\n          id\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetProducts($first: Int, $skip: Int) {\n  productsConnection(first: $first, skip: $skip) {\n    aggregate {\n      count\n    }\n    edges {\n      node {\n        slug\n        name\n        price\n        images(first: 1) {\n          url\n        }\n        reviews {\n          rating\n          id\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProductsSlugs($first: Int) {\n  products(first: $first, skip: 0) {\n    slug\n  }\n}"): (typeof documents)["query GetProductsSlugs($first: Int) {\n  products(first: $first, skip: 0) {\n    slug\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;