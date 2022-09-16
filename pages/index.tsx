import Head from "next/head";
import Link from "next/link";
import Intro from "@/components/home/intro";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Yujeong&apos;s Digital Space | Software Developer</title>
        <meta name="description" content="Home page" />
      </Head>
      <Intro />
    </div>
  );
};

export default HomePage;
