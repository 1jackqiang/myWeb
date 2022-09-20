import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>首页</title>
      </Head>
      <Layout>首页</Layout>
    </div>
  );
};

export default Home;
