import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from '@/containers/home';

import Layout from '@/components/layout';

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
