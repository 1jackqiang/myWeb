import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="applicable-device" content="pc,mobile" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
          <meta name="renderer" content="webkit" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/favicon.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            href="/images/favicon.png"
          />
          <script src="/lib-flexible.js" async />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
