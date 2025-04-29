import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Pribadi",
  description: "Website pribadi untuk menamnpilkan proyek dan esai.",
  verification: {
    google: "VHOFIHgeHyK5PJQ2i-pHU9CjVenqbP9t1qm33i_HG6k",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="VHOFIHgeHyK5PJQ2i-pHU9CjVenqbP9t1qm33i_HG6k" />
      </head>
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}