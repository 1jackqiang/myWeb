import type { NextPage } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Layout from '@/components/layout';
import HomePage from '@/containers/home';

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="零代码，易搭云 _零代码应用搭建_数据集成平台_"
        description="易搭云是零代码应用搭建平台，提供表单、流程、报表等丰富的功能组件，开箱即用的企业级模板以及应用连接器，无需编写代码，非技术人员也能快速搭建人事管理、研发管理等场景的企业级应用、系统，赋能各行各业低门槛数字化转型，限时免费试用"
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              '易搭云,yidayun,零代码,无代码, 低代码,流程引擎,在线表单,在线报表,应用连接,数据集成,系统连接,企业管理系统',
          },
        ]}
      />
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
};

export default Home;
