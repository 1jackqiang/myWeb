import cls from 'classnames';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import { IconFont } from '@/components/IconFont';

const navigation = [
  {
    title: '首页',
    href: '/',
  },
  {
    title: '模板中心',
    href: 'https://www.yidayun.com/app-market',
  },
  {
    title: '云生集团',
    href: 'http://www.ysinc.com/',
  },
];

const NavHeader = () => {
  const router = useRouter();
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
        headerRef.current.classList.add('header-scroll');
      } else {
        headerRef.current.classList.remove('header-scroll');
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCollapsed = () => {
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
            <li
              key={item.href}
              className={cls('header-content-nav-item', {
                active: router.pathname === item.href,
              })}
            >
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
        <a className="header-right-login" href="https://yidayun.com/login">
          登录
        </a>
        <a
          className="header-right-register"
          href="https://yidayun.com/register"
        >
          注册
        </a>
        <button className="header-right-menu" onTouchStart={handleCollapsed}>
          {collapsed ? (
            <IconFont type="icon-close" />
          ) : (
            <IconFont type="icon-paixu1" />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavHeader;
