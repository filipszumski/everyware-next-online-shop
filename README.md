# Everyware - online shop

## Description

An online shop created with a modern tech stack focusing on performance, scalability, and best practices in web development. Hosted on Vercel for seamless deployment. This project leverages the following technologies:

- Next.js
- Tailwind CSS
- GraphQL
- Hygraph (Headless CMS)
- TypeScript

## Features

- **Static Site Generation, Server Side Rendering, and Incremental Static Regeneration**: Utilizes Next.js capabilities for pre-rendering pages for faster load times and improved SEO.
- **SEO Good Practices**: Implements OpenGraph and JSON-LD for enhanced search engine optimization.
- **Styling**: Uses Tailwind CSS and the Headless UI library, along with additional libraries like `tailwind-merge` and `class-variance-authority` for complex UI component styling.
- **Content Management**: Leverages Hygraph Headless CMS for content delivery through GraphQL API integration.
- **Forms**: Incorporates `react-hook-form` and `zod` for form handling and validation.
- **Environment Setup**: Extensive setup with ESLint, Prettier, Husky for Git hooks, lint-staged, and commitlint for maintaining code quality.
- **Responsive Design**: Ensures the application is fully responsive across various devices and screen sizes.

## Functionalities

- **Products Page**: Displays articles with server-side rendering for fast loading times.

![Products page image](/public/products.png)

- **Products Details**: Displays server rendered article details with markdown description and reviews list.

![Products page image](/public/product-details.png)

- **Cart Logic**: Utilizes localStorage for managing the shopping cart, with plans
  to sync the cart remotely.

![Cart page image](/public/cart.png)

- **Checkout Form**: Provides a checkout experience for users.

![Checkout page image](/public/checkout.png)

## To Be Done

- Implementing order placement with payment handling (Stripe).
- Setting up email communications.
- Writing end-to-end tests.

## Next

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
