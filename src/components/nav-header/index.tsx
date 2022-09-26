import cls from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

const navigation = [
  {
    title: '模板中心',
    href: '#',
  },
  {
    title: '云生集团',
    href: '#',
  },
];

const NavHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) {
        return;
      }
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 70) {
        headerRef.current.classList.add('header-white');
      } else {
        headerRef.current.classList.remove('header-white');
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTouchStart = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="header-logo">
        <a href="/#">
          <img src="/images/logo.png" alt="logo" />
        </a>
      </div>
      <div className="header-content">
        <ul className="header-content-nav">
          {navigation.map((item) => (
            <li key={item.href} className="header-content-nav-item">
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={cls('header-content-dropmenu', {
          'header-content-dropmenu-collapsed': collapsed,
        })}
      >
        <ul className="header-content-dropmenu-nav">
          {navigation.map((item) => (
            <li key={item.href} className="header-content-dropmenu-nav-item">
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-right">
        <a className="header-right-login" href="/#">
          登录
        </a>
        <a className="header-right-register" href="/#">
          注册
        </a>
        <button className="header-right-menu" onTouchStart={handleTouchStart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavHeader;
