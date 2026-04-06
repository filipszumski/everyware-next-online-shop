import "@/styles/globals.css";

import { Footer, Header } from "@/components";
import { latoFont } from "@/styles/fonts";

import { Providers } from "./providers";

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
