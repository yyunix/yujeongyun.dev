import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="max-w-4xl m-auto px-6 md:px-16">
        <Head />
        <body className="bg-gray-50 dark:bg-gray-900  text-gray-900 dark:text-gray-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
