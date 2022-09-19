import Header from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,maximum=1,user-scalable=no,viewport-fit=cover"
				/>
			</Header>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
