import Intro from "@/components/home/intro";
import Layout from "@/components/layout/layout";

const HomePage = () => {
  return (
    <Layout
      pageTitle="Yujeong's Digital Space | Software Developer"
      pageDescription="I'm a software engineer living in Toronto, Ontario. My goal is
    to write useful apps and continue creating beautifull websites while
    expanding my knowledge in software engineering."
    >
      <Intro />
    </Layout>
  );
};

export default HomePage;
