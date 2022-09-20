import Head from "next/head";
import Intro from "@/components/home/intro";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Yujeong&apos;s Digital Space | Software Developer</title>
        <meta name="description" content="Home page" />
      </Head>
      <Intro />
    </>
  );
};

export default HomePage;
