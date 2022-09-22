import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

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

const NavHeader: React.FC = () => {
  return (
    <header className="bg-transparent">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <img
            src="/images/logo.png"
            alt=""
            className="h-7 w-20 object-cover"
          />
        </a>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav className="hidden md:block" aria-labelledby="header-navigation">
            <h2 className="sr-only" id="header-navigation">
              Header navigation
            </h2>
            <ul className="flex items-center gap-6 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href={item.href}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <a
                className="block rounded-md px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-100"
                href="/#"
              >
                登录
              </a>
              <a
                className="rounded-md border border-blue-500 bg-gray-100 bg-transparent px-5 py-2.5 text-sm font-medium text-blue-500 transition"
                href="/#"
              >
                注册
              </a>
            </div>
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
      </div>
    </header>
  );
};

export default NavHeader;
