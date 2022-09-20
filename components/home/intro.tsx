import Image from "next/image";
import TextContentWrapper from "../shared/text-content-wrapper";

const Intro = () => {
  return (
    <>
      <div className="w-20 md:w-fit inline-flex bg-back-secondary rounded-full mb-4">
        <Image
          src="/images/site/dinosaur.png"
          alt="Dinosaur"
          width={100}
          height={100}
        />
      </div>
      <TextContentWrapper>
        <h1 className="">Hi, I&apos;m Yujeong.</h1>

        <section>
          <h3>A quick intro</h3>
          <p>
            I&apos;m a software engineer living in Toronto, Ontario. My goal is
            to write useful apps and continue creating beautifull websites while
            expanding my knowledge in software engineering.
          </p>
          <p>
            When I&apos;m not programming, you&apos;ll find me walking my dogs
            or hiking in the woods. On weekends, you can catch me at a
            Vietnamese restaurant enjoying Bánh mì and Bún bò huế.
          </p>
        </section>
        <section>
          <h3>What&apos;s in my toolbox?</h3>
          <ul>
            <li>JavaScript, Typescript </li>
            <li>React, NextJS, Gatsby, Context API, Redux</li>
            <li>Vue, Vuex </li>
            <li>CSS, SCSS, Styled-Components, TailwindCSS </li>
            <li>Framer motion </li>
            <li>Node, Express </li>
            <li>HTML </li>
            <li>SQL </li>
            <li>REST API, GraphQL </li>
            <li>Jest, React Testing Library </li>
            <li>Git, JIRA </li>
            <li>Storybook </li>
            <li>Hasura </li>
            <li>Headless CMS (Wordpress, Strapi)</li>
          </ul>
        </section>

        <section>
          <h3>Get in touch</h3>
          <p>
            <a href="https://github.com/yyunix">Github</a> or
            yyunix[at]gmail.com
          </p>
        </section>
      </TextContentWrapper>
    </>
  );
};

export default Intro;
