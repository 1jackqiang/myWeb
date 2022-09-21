// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Slide from 'react-reveal/Slide';

import { IconFont } from '@/components/IconFont';

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
          <Fade bottom delay={300}>
            <h3 className="text-sm">轻松搭建企业个性化系统</h3>
          </Fade>
          <Fade delay={600}>
            <a
              className="mt-5 inline-flex items-center rounded-sm border-2 border-blue-500 bg-white px-5 py-2 text-xs font-normal text-blue-500"
              href="#"
            >
              <span className="mr-3">开始创建</span>
              <IconFont type="icon-enter" />
            </a>
          </Fade>
        </section>
        <figure className="eb-home-background-first z-10" />
        <img
          className="eb-home-application absolute bottom-10 left-0 right-0 mx-auto"
          src="/images/application.gif"
          alt=""
        />
      </div>
      <div className="flex w-full flex-col gap-8 md:h-[730px] md:flex-row md:items-center md:justify-center">
        <section className="mt-10 px-6 md:mt-0 md:flex-shrink-0">
          <Slide left big={false}>
            <h1 className="mb-0 text-3xl font-normal first-letter:px-5 first-line:text-blue-500 md:text-4xl md:first-letter:px-6">
              “零”基础小白
            </h1>
            <h1 className="mt-0 mb-3 text-3xl font-normal md:text-4xl">
              也能搭建业务应用
            </h1>
          </Slide>
          <Slide right cascade big={false} delay={100}>
            <ul className="md:mt-8">
              <li className="mb-3 flex items-start justify-start gap-3 md:mb-6">
                <IconFont type="icon-checked" className="leading-4" />
                <p className="text-sm font-light">
                  丰富的字段类型，拖拉拽的操作方式
                </p>
              </li>
              <li className="flex items-start justify-start gap-3">
                <IconFont type="icon-checked" className="leading-4" />
                <p className="text-sm font-light">
                  丰富的字段类型，拖拉拽的操作方式
                </p>
              </li>
            </ul>
          </Slide>
          <a
            className="mt-5 inline-flex items-center rounded-sm border-2 border-blue-500 bg-blue-500 px-5 py-2 text-xs font-normal text-white"
            href="#"
          >
            <span className="mr-3">即刻体验</span>
            <IconFont type="icon-enter" />
          </a>
        </section>
        <aside className="relative md:flex-grow">
          <figure className="h-[14rem] w-full px-6">
            <img
              className="-full mx-auto w-full pb-5"
              src="/images/application.gif"
              alt=""
            />
          </figure>
          <div className="absolute bottom-0 right-0 -z-10">
            <img
              src="images/circle@2x.png"
              alt=""
              className="h-[9rem] w-[9rem]"
            />
          </div>
          <div className="absolute bottom-0 left-14 h-[3.5rem] w-[3rem]">
            <img
              src="images/arrow@2x.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </aside>
      </div>
    </>
  );
};

export default Home;
