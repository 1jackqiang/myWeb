import Document, { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';

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
					<link rel="icon" type="image/png" href="/favicon.png" />
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