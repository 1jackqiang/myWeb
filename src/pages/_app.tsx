import '../styles/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/index.scss';

import type { AppProps } from 'next/app';
import Header from 'next/head';
// @ts-ignore
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1.0,user-scalable=no,viewport-fit=cover"
        />
      </Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
