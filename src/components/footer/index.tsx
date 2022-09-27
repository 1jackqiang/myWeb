const Footer = () => {
  return (
    <footer className="bg-black opacity-95">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="block h-7 w-20 lg:mx-auto">
            <img
              className="h-full w-full object-cover"
              src="/images/logo-dark.png"
              alt="logo"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 text-white md:grid-cols-3 lg:col-span-2">
            <div>
              <p className="text-base font-bold">支持</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm font-normal">
                <a className="hover:opacity-75" href="">
                  常见问题
                </a>
                <a className="hover:opacity-75" href="">
                  帮助中心
                </a>
                <a className="hover:opacity-75" href="">
                  交流中心
                </a>
                <a className="hover:opacity-75" href="">
                  交流社区
                </a>
              </nav>
            </div>
            <div>
              <p className="text-base font-bold">关于我们</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm font-normal">
                <a className="hover:opacity-75" href="">
                  公司简介
                </a>
                <a className="hover:opacity-75" href="">
                  公司历程
                </a>
                <a className="hover:opacity-75" href="">
                  公司荣誉
                </a>
              </nav>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-base font-bold">联系我们</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm font-normal">
                <a className="hover:opacity-75" href="">
                  深圳市南山区大冲商务中心A座1705
                </a>
                <a className="hover:opacity-75" href="">
                  4001-123330
                </a>
                <a className="hover:opacity-75" href="">
                  yidayun@ysinc.com
                </a>
              </nav>
            </div>
          </div>
          <div className="flex flex-row gap-6 text-white lg:flex-col lg:items-center">
            <div>
              <img
                src="/images/code.png"
                alt="公众号"
                className="h-20 w-20 object-cover"
              />
              <p className="mt-2 text-sm font-normal">易搭云公众号</p>
            </div>
            <div>
              <img
                src="/images/code.png"
                alt="公众号"
                className="h-20 w-20 object-cover"
              />
              <p className="mt-2 text-sm font-normal">易搭云小程序</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <div className="footer-about-logo">
            <img src="/images/logo-dark.png" alt="logo" />
          </div>
          <div className="footer-about-content">
            <div className="footer-about-content-item">
              <p>支持</p>
              <nav>
                <a href="">常见问题</a>
                <a href="">帮助中心</a>
                <a href="">交流中心</a>
                <a href="">交流社区</a>
              </nav>
            </div>
            <div className="footer-about-content-item">
              <p>关于我们</p>
              <nav>
                <a href="">公司简介</a>
                <a href="">公司历程</a>
                <a href="">公司荣誉</a>
              </nav>
            </div>
            <div className="footer-about-content-item footer-about-content-item-contact">
              <p>联系我们</p>
              <nav>
                <a href="">深圳市南山区大冲商务中心A座1705</a>
                <a href="">4001-123330</a>
                <a href="">yidayun@ysinc.com</a>
              </nav>
            </div>
          </div>
          <div className="footer-about-code">
            <div className="footer-code-item">
              <img src="/images/code.jpg" alt="公众号" />
              <p>易搭云公众号</p>
            </div>
            <div className="footer-code-item">
              <img src="/images/applet.jpg" alt="小程序" />
              <p>易搭云小程序</p>
            </div>
          </div>
        </div>
        <p className="footer-record">
          粤ICP备2022089886号 | 易达云计算（深圳）有限公司版权所有2021-2022
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
