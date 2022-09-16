import Head from "next/head";
import Link from "next/link";

const DEV_POSTS = [
  {
    id: 1,
    title: "Hello World",
    slug: "hello-world",
    date: "2022-09-10",
    image: "hello-world.jpg",
  },
];

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Yujeong&apos;s Digital Space | Software Developer</title>
        <meta name="description" content="Home page" />
      </Head>
      <Link href="/posts">Posts</Link>
    </div>
  );
};

export default HomePage;
