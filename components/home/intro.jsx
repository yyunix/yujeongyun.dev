import Image from "next/image";

const Intro = () => {
  return (
    <header>
      <div className="rounded-full bg-slate-900 w-fit flex mb-4">
        <Image
          src="/images/site/dinosaur.png"
          alt="Dinosaur"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-4xl font-bold">Hi, I&apos;m Yujeong.</h1>
      <section className="py-8">
        <h2>A quick intro</h2>
        <p className="dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore, distinctio accusantium nam incidunt repellendus iste facilis inventore est fugit, perferendis ipsa quos totam in asperiores fuga consequatur quis sed deserunt et modi laborum similique reiciendis delectus! Nihil ullam qui debitis quo quasi velit incidunt blanditiis rem, sit natus amet quos magni tempore harum fugiat nostrum sunt commodi voluptate laudantium pariatur? Est rem animi, ducimus maxime voluptates delectus at! Ut eligendi optio magnam rerum numquam ab. Facere sint, enim voluptas numquam magni ullam ut labore consectetur quisquam voluptatum nobis placeat in dolorum ducimus delectus accusamus deleniti vero suscipit corporis nihil!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore, distinctio accusantium nam incidunt repellendus iste facilis inventore est fugit, perferendis ipsa quos totam in asperiores fuga consequatur quis sed deserunt et modi laborum similique reiciendis delectus! Nihil ullam qui debitis quo quasi velit incidunt blanditiis rem, sit natus amet quos magni tempore harum fugiat nostrum sunt commodi voluptate laudantium pariatur? Est rem animi, ducimus maxime voluptates delectus at! Ut eligendi optio magnam rerum numquam ab. Facere sint, enim voluptas numquam magni ullam ut labore consectetur quisquam voluptatum nobis placeat in dolorum ducimus delectus accusamus deleniti vero suscipit corporis nihil!</p>
      </section>
      <section  className="pb-8">
        <h2>Get in touch</h2>
        <p><a href="">Github</a> or yujeongyun.dev[at]gmail.com</p>
      </section>
    </header>
  );
};

export default Intro;
