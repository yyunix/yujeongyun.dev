import Head from "next/head";
import Intro from "@/components/home/intro";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Yujeong&apos;s Digital Space | Software Developer</title>
        <meta
          name="description"
          content="I'm a software engineer living in Toronto, Ontario. My goal is
          to write useful apps and continue creating beautifull websites while
          expanding my knowledge in software engineering."
        />
        <meta property="og:title" content="Yujeong's Digital Space" />
        <meta property="og:url" content="yyunix.dev" />
        <meta
          property="og:description"
          content="I'm a software engineer living in Toronto, Ontario. My goal is
          to write useful apps and continue creating beautifull websites while
          expanding my knowledge in software engineering."
        />
      </Head>
      <Intro />
    </>
  );
};

export default HomePage;
