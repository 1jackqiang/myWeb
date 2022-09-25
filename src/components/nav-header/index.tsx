import React from 'react';

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
  return (
    <div className="header">
      <div className="header-logo">
        <a href="/#">
          <img src="/images/logo.png" alt="logo" />
        </a>
      </div>
      <div className="header-content">
        <nav className="header-content-nav">
          {navigation.map((item) => (
            <li key={item.href} className="header-content-nav-item">
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </nav>
      </div>
      <div className="header-right">
        <a className="header-right-login" href="/#">
          登录
        </a>
        <a className="header-right-register" href="/#">
          注册
        </a>
        <button className="header-right-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavHeader;
