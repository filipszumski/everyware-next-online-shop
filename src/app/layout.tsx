import "@/styles/globals.css";

import { Metadata } from "next";

import { Footer, Header } from "@/components";
import { SEO_DEFAULTS } from "@/shared/constants/seoDefaults";
import { latoFont } from "@/styles/fonts";

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

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={latoFont.className}>
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen text-textDefault bg-background">
            <Header />
            <main className="flex-grow xl:max-w-6xl xl:mx-auto w-full p-4 sm:p-8 lg:p-12 relative">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
