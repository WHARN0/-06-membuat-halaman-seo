import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { defaultMetaData } from "../utils/metadata";

type LayoutProps = {
  children: React.ReactNode;
};

type ChildWithMetadata = React.ReactNode & {
  props?: {
    metadata?: {
      title: string;
      description: string;
      openGraph: {
        images: string;
        url: string;
      };
    };
  };
};

export default function Layout({ children }: LayoutProps) {
  const metadata = (children as ChildWithMetadata)?.props?.metadata || defaultMetaData;
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="VHOFIHgeHyK5PJQ2i-pHU9CjVenqbP9t1qm33i_HG6k" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.images} />
        <meta property="og:url" content={metadata.openGraph.url} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
