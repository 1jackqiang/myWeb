import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '@/components/layout';
import HomePage from '@/containers/home';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>首页</title>
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
};

export default Home;
