import { IconFont } from '@/components/IconFont';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

const Home = () => {
  return (
    <>
      <div className="z-0 h-screen w-full">
        <section className="absolute inset-0 top-32 z-20 mx-auto text-center">
          <Fade bottom>
            <h1 className="text-3xl first-letter:text-blue-500">
              零代码，易搭云
            </h1>
          </Fade>
          <Fade bottom>
            <h3 className="text-sm">轻松搭建企业个性化系统</h3>
          </Fade>
          <Pulse>
            <a
              className="mt-5 inline-flex items-center rounded-sm border-2 border-blue-500 bg-white px-5 py-2 text-xs font-normal text-blue-500"
              href="#"
            >
              <span className="mr-3">开始创建</span>
              <IconFont type="icon-enter" />
            </a>
          </Pulse>
        </section>
        <figure className="eb-home-background-first z-10" />
        <img className="eb-home-application absolute bottom-10 mx-auto left-0 right-0" src="/images/application.gif" alt="" />
      </div>
      <div className="h-screen w-full">
        <section className="mt-10 px-6">
          <h1 className="mb-0 text-3xl font-normal first-line:text-blue-500">
            “零”基础小白
          </h1>
          <h1 className="mt-0 mb-3 text-3xl font-normal">也能搭建业务应用</h1>
          <ul>
            <li className="mb-3 flex items-start justify-start gap-3">
              <IconFont type="icon-enter" />
              <p>丰富的字段类型，拖拉拽的操作方式</p>
            </li>
            <li className="flex items-start justify-start gap-3">
              <IconFont type="icon-enter" />
              <p>丰富的字段类型，拖拉拽的操作方式</p>
            </li>
          </ul>
          <a
            className="mt-5 inline-flex items-center rounded-sm border-2 border-blue-500 bg-blue-500 px-5 py-2 text-xs font-normal text-white"
            href="#"
          >
            <span className="mr-3">即刻体验</span>
            <IconFont type="icon-enter" />
          </a>
        </section>
        <figure></figure>
      </div>
    </>
  );
};

export default Home;
