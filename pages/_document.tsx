import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white-000 dark:bg-gray-900  text-gray-900 dark:text-gray-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
