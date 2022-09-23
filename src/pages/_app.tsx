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
          content="width=device-width,initial-scale=1,maximum=1,minimum-scale=1.0,user-scalable=no,viewport-fit=cover,uc-fitscreen=yes"
        />
      </Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
