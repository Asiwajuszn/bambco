import type { Metadata } from "next";
// @ts-ignore: import global css side effect
import "./globals.css";

export const metadata: Metadata = {
  title: "BAM-B & CO | Beyond Sourcing — Direct Importation from China to Nigeria",
  description:
    "BAM-B & CO helps you source and import products from China to Nigeria via sea shipping and pre-order services. Trusted, affordable, nationwide delivery.",
  keywords: [
    "importation Nigeria",
    "China to Nigeria",
    "pre-order",
    "sea shipping",
    "1688",
    "Alibaba",
    "BAM-B CO",
  ],
  openGraph: {
    title: "BAM-B & CO | Beyond Sourcing",
    description: "Direct Importation from China to Nigeria",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
