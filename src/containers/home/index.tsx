import Image from 'next/image';
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Slide from 'react-reveal/Slide';

import { IconFont } from '@/components/IconFont';

const Home = () => {
  return (
    <>
      <div className="home-banner z-0 h-screen w-full">
        <div className="home-banner-content">
          <Fade bottom>
            <h1 className="home-banner-content-title">零代码，易搭云</h1>
          </Fade>
          <Fade bottom delay={300}>
            <h3 className="home-banner-content-desc">轻松搭建企业个性化系统</h3>
          </Fade>
          <Fade delay={600}>
            <a className="home-banner-content-link" href="#">
              <span>开始创建</span>
              <IconFont type="icon-enter" />
            </a>
          </Fade>
        </div>
      </div>
      <div className="section-app">
        <div className="section-app-aside">
          <div className="section-app-aside-caption">
            <Slide left>
              <h1>
                <span className="section-app-aside-caption-highlight">
                  “零”
                </span>
                基础小白
                <br />
                也能搭建业务应用
              </h1>
            </Slide>
          </div>
          <Slide right cascade big={false} delay={100}>
            <ul className="section-app-aside-desc">
              <li>
                <IconFont
                  className="section-app-aside-desc-icon"
                  type="icon-checked"
                />
                <p className="text-sm font-light">
                  丰富的字段类型，拖拉拽的操作方式
                </p>
              </li>
              <li>
                <IconFont
                  className="section-app-aside-desc-icon"
                  type="icon-checked"
                />
                <p className="text-sm font-light">
                  丰富的字段类型，拖拉拽的操作方式
                </p>
              </li>
            </ul>
          </Slide>
          <a className="section-app-aside-link" href="#">
            <span className="mr-3">即刻体验</span>
            <IconFont
              className="section-app-aside-link-icon"
              type="icon-enter"
            />
          </a>
        </div>
        <div className="section-app-content">
          <div className="section-app-content-video">
            <video autoPlay loop preload="auto" muted playsInline>
              <source src="/video/home-app.mp4" type="video/mp4" />
            </video>
            <img
              className="section-app-content-video-wrap"
              src="/images/video-wrap.png"
              alt=""
            />
          </div>
          <div className="section-app-content-img">
            <img
              className="section-app-content-img-body"
              src="/gif/home-form.gif"
            />
            <img
              className="section-app-content-img-wrap"
              src="/images/video-wrap-small.png"
              alt=""
            />
          </div>
          <div className="section-app-content-circle">
            <img src="images/circle@2x.png" alt="" />
          </div>
          <div className="section-app-content-arrow">
            <img src="images/arrow@2x.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section-app section-app-reverse">
        <div className="section-app-aside">
          <div className="section-app-aside-caption">
            <Slide left>
              <h1>
                <span className="section-app-aside-caption-highlight">
                  “流程驱动”
                </span>
                <br />
                灵活应对复杂业务
              </h1>
            </Slide>
          </div>
          <Slide right cascade big={false} delay={100}>
            <ul className="section-app-aside-desc">
              <li>
                <IconFont
                  className="section-app-aside-desc-icon"
                  type="icon-checked"
                />
                <p className="text-sm font-light">
                  可视化的流程配置，应对复杂组织与业务
                </p>
              </li>
              <li>
                <IconFont
                  className="section-app-aside-desc-icon"
                  type="icon-checked"
                />
                <p className="text-sm font-light">
                  自动化任务，减少重复劳动，提升工作效率
                </p>
              </li>
            </ul>
          </Slide>
          <a className="section-app-aside-link" href="#">
            <span className="mr-3">即刻体验</span>
            <IconFont
              className="section-app-aside-link-icon"
              type="icon-enter"
            />
          </a>
        </div>
        <div className="section-app-content">
          <div className="section-app-content-video">
            <video autoPlay loop preload="auto" muted playsInline>
              <source src="/video/home-section1.mp4" type="video/mp4" />
            </video>
            <img
              className="section-app-content-video-wrap"
              src="/images/video-wrap.png"
              alt=""
            />
          </div>
          <div className="section-app-content-img">
            <img
              className="section-app-content-img-body"
              src="/gif/home-process.gif"
            />
            <img
              className="section-app-content-img-wrap"
              src="/images/video-wrap-small.png"
              alt=""
            />
          </div>
          <div className="section-app-content-circle">
            <img src="images/circle@2x.png" alt="" />
          </div>
          <div className="section-app-content-arrow">
            <img src="images/arrow@2x.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section-app">
        <div className="section-app-aside">
          <div className="section-app-aside-caption">
            <Slide left>
              <h1>
                易连接
                <br />
                与现有系统
                <span className="section-app-aside-caption-highlight">
                  无缝对接
                </span>
              </h1>
            </Slide>
          </div>
          <Slide right cascade big={false} delay={100}>
            <ul className="section-app-aside-desc">
              <li>
                <IconFont
                  className="section-app-aside-desc-icon"
                  type="icon-checked"
                />
                <p className="text-sm font-light">
                  通过连接器，打通企业内外的不同系统
                </p>
              </li>
              <li>
                <IconFont
                  className="section-app-aside-desc-icon"
                  type="icon-checked"
                />
                <p className="text-sm font-light">
                  实现数据相互传输，打破数据孤岛
                </p>
              </li>
            </ul>
          </Slide>
          <a className="section-app-aside-link" href="#">
            <span className="mr-3">即刻体验</span>
            <IconFont
              className="section-app-aside-link-icon"
              type="icon-enter"
            />
          </a>
        </div>
        <div className="section-app-content">
          <div className="section-app-content-video">
            <video autoPlay loop preload="auto" muted playsInline>
              <source src="/video/home-section1.mp4" type="video/mp4" />
            </video>
            <img
              className="section-app-content-video-wrap"
              src="/images/video-wrap.png"
              alt=""
            />
          </div>
          <div className="section-app-content-img">
            <img
              className="section-app-content-img-body"
              src="/gif/home-connect.gif"
            />
            <img
              className="section-app-content-img-wrap"
              src="/images/video-wrap-small.png"
              alt=""
            />
          </div>
          <div className="section-app-content-circle">
            <img src="images/circle@2x.png" alt="" />
          </div>
          <div className="section-app-content-arrow">
            <img src="images/arrow@2x.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section-app section-app-reverse">
        <div className="section-app-aside">
          <div className="section-app-aside-caption">
            <Slide left>
              <h1>
                <span className="section-app-aside-caption-highlight">
                  “数据可视化”
                </span>
                <br />
                业务状态一目了然
              </h1>
            </Slide>
          </div>
          <Slide right cascade big={false} delay={100}>
            <ul className="section-app-aside-desc">
              <li>
                <IconFont
                  className="section-app-aside-desc-icon"
                  type="icon-checked"
                />
                <p className="text-sm font-light">
                  多种报表类型，轻松拖拖拽组合
                </p>
              </li>
              <li>
                <IconFont
                  className="section-app-aside-desc-icon"
                  type="icon-checked"
                />
                <p className="text-sm font-light">
                  数据驱动业务，为管理和决策提供可靠支持
                </p>
              </li>
            </ul>
          </Slide>
          <a className="section-app-aside-link" href="#">
            <span className="mr-3">即刻体验</span>
            <IconFont
              className="section-app-aside-link-icon"
              type="icon-enter"
            />
          </a>
        </div>
        <div className="section-app-content">
          <div className="section-app-content-video">
            <video autoPlay loop preload="auto" muted playsInline>
              <source src="/video/home-section1.mp4" type="video/mp4" />
            </video>
            <img
              className="section-app-content-video-wrap"
              src="/images/video-wrap.png"
              alt=""
            />
          </div>
          <div className="section-app-content-img">
            <img
              className="section-app-content-img-body"
              src="/gif/home-graph.gif"
            />
            <img
              className="section-app-content-img-wrap"
              src="/images/video-wrap-small.png"
              alt=""
            />
          </div>
          <div className="section-app-content-circle">
            <img src="images/circle@2x.png" alt="" />
          </div>
          <div className="section-app-content-arrow">
            <img src="images/arrow@2x.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section-template">
        <picture>
          <source
            media="(max-width: 750px)"
            srcSet="/images/template-small.jpg"
          />
          <source
            media="(max-width: 1280px)"
            srcSet="/images/template-medium.jpg"
          />
          <img
            className="section-more-img"
            src="/images/template-medium.jpg"
            alt="more"
            loading="lazy"
          />
        </picture>
        <div className="section-more-content">
          <h1>
            <img src="/images/brand@2x.png" alt="" />
            更多的奇妙想法正在实现
          </h1>
          <a className="section-more-link" href="#">
            立即体验 →
          </a>
        </div>
      </div>
      <div className="section-more">
        <picture>
          <source media="(max-width: 750px)" srcSet="/images/more-small.jpg" />
          <source
            media="(max-width: 1280px)"
            srcSet="/images/more-medium.jpg"
          />
          <img
            className="section-more-img"
            src="/images/more-large.jpg"
            alt="more"
            loading="lazy"
          />
        </picture>
        <div className="section-more-content">
          <h1>
            <img src="/images/brand@2x.png" alt="" />
            更多的奇妙想法正在实现
          </h1>
          <a className="section-more-link" href="#">
            立即体验 →
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
