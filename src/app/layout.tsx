import "@/styles/globals.css";

import { Metadata } from "next";
import { getServerSession } from "next-auth";

import { SEO_DEFAULTS } from "@/shared/constants/seoDefaults";

import { latoFont } from "../styles/fonts";
import { authOptions } from "./api/auth/[...nextauth]/utils/authOptions";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: SEO_DEFAULTS.siteName,
    template: `%s | ${SEO_DEFAULTS.siteName}`,
  },
  description: SEO_DEFAULTS.description,
  openGraph: {
    type: "website",
    siteName: SEO_DEFAULTS.siteName,
    title: SEO_DEFAULTS.siteName,
    description: SEO_DEFAULTS.description,
    url: process.env.NEXT_PUBLIC_APP_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/everyware-logo-og.png`,
        alt: "Everyware logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className={latoFont.className}>
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
