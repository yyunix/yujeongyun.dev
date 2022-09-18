import Image from "next/image";
import SectionText from "./section-text";
import SectionTitle from "./section-title";

const Intro = () => {
  return (
    <>
      <div className="w-20 md:w-fit inline-flex bg-gray-200 dark:bg-gray-800 rounded-full">
        <Image
          src="/images/site/dinosaur.png"
          alt="Dinosaur"
          width={100}
          height={100}
        />
      </div>
      <h1 className="mt-4 mb-8 text-2xl md:text-4xl font-bold">
        Hi, I&apos;m Yujeong.
      </h1>
      <section className="mb-8">
        <SectionTitle>About me</SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore,
          distinctio accusantium nam incidunt repellendus iste facilis inventore
          est fugit, perferendis ipsa quos totam in asperiores fuga consequatur
          quis sed deserunt et modi laborum similique reiciendis delectus! Nihil
          ullam qui debitis quo quasi velit incidunt blanditiis rem, sit natus
          amet quos magni tempore harum fugiat nostrum sunt commodi voluptate
          laudantium pariatur? Est rem animi, ducimus maxime voluptates delectus
          at! Ut eligendi optio magnam rerum numquam ab. Facere sint, enim
          voluptas numquam magni ullam ut labore consectetur quisquam voluptatum
          nobis placeat in dolorum ducimus delectus accusamus deleniti vero
          suscipit corporis nihil!
        </SectionText>
        <SectionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore,
          distinctio accusantium nam incidunt repellendus iste facilis inventore
          est fugit, perferendis ipsa quos totam in asperiores fuga consequatur
          quis sed deserunt et modi laborum similique reiciendis delectus! Nihil
          ullam qui debitis quo quasi velit incidunt blanditiis rem, sit natus
          amet quos magni tempore harum fugiat nostrum sunt commodi voluptate
          laudantium pariatur? Est rem animi, ducimus maxime voluptates delectus
          at! Ut eligendi optio magnam rerum numquam ab. Facere sint, enim
          voluptas numquam magni ullam ut labore consectetur quisquam voluptatum
          nobis placeat in dolorum ducimus delectus accusamus deleniti vero
          suscipit corporis nihil!
        </SectionText>
      </section>
      <section className="mb-8">
        <SectionTitle>Get in touch</SectionTitle>
        <SectionText>
          <a href="">Github</a> or yyunix[at]gmail.com
        </SectionText>
      </section>
    </>
  );
};

export default Intro;
