const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <div className="footer-about-logo">
            <img src="/images/logo-dark.png" alt="logo" />
          </div>
          <div className="footer-about-content">
            <div className="footer-about-content-item">
              <p>支持</p>
              <nav>
                <a
                  href="https://support.qq.com/products/409299/faqs-more/"
                  target="_blank"
                  rel="noreferrer"
                >
                  常见问题
                </a>
                <a
                  href="https://docs.qq.com/doc/p/52524cba967f3f15774156586f28fee7f2d7961b?dver=3.0.0"
                  target="_blank"
                  rel="noreferrer"
                >
                  帮助中心
                </a>
                <a
                  href="https://support.qq.com/products/409299/"
                  target="_blank"
                  rel="noreferrer"
                >
                  交流社区
                </a>
              </nav>
            </div>
            <div className="footer-about-content-item">
              <p>关于我们</p>
              <nav>
                <a
                  href="http://www.ysinc.com/about?types=profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  公司简介
                </a>
                <a
                  href="http://www.ysinc.com/about?types=history"
                  target="_blank"
                  rel="noreferrer"
                >
                  公司历程
                </a>
                <a
                  href="http://www.ysinc.com/about?types=honor"
                  target="_blank"
                  rel="noreferrer"
                >
                  公司荣誉
                </a>
              </nav>
            </div>
            <div className="footer-about-content-item footer-about-content-item-contact">
              <p>联系我们</p>
              <nav>
                <li>深圳市南山区大冲商务中心A座1705</li>
                <li>4001-123330</li>
                <li>yidayun@ysinc.com</li>
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
    </div>
  );
};

export default Footer;
