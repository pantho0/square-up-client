import "../styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Barlow } from "next/font/google";

import { Providers } from "./providers";

import { siteConfig } from "../config/site";
import { fontSans } from "../config/fonts";
import { Navbar } from "../components/navbar";
import Footer from "../components/Home/Footer";

const barlow = Barlow({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${barlow.className} bg-[#13050C]`}
    >
      <head />
      <body
        className={clsx(
          "font-sans antialiased text-[#FEE3FA]",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen bg-[#13050C]">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <footer className="w-full flex items-center justify-center py-3">
              <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
