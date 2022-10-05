import "@/styles/globals.css";
import "@/styles/codeblock.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:site_name" content="Yujeong Yun" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={"https://yyunix.dev/images/site/twitter-card.png"}
        />
        <meta property="og:image:alt" content="Yujeong Yun" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
