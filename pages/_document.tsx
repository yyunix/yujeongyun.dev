import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-back-primary text-fore-primary text-sm sm:text-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
