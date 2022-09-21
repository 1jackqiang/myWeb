import { Popover, Transition, Menu } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import { IconFont } from '@/components/IconFont';

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
    <header className="fixed z-50 flex w-full items-center justify-between px-4 py-5 md:justify-start">
      <a href="#">
        <img src="/images/logo.png" alt="" className="h-7 w-20" />
      </a>
      <div className="flex items-center justify-end gap-2.5">
        <a
          href="#"
          className="whitespace-nowrap text-base font-light text-black"
        >
          登录
        </a>
        <a
          href="#"
          className="whitespace-nowrap rounded border-2 border-blue-500 px-4 py-2 text-base font-light leading-4 text-blue-500"
        >
          注册
        </a>
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button className="flex h-7 w-7 items-center justify-center outline-none">
                <span className="sr-only">Close menu</span>
                {open ? <CloseOutlined /> : <MenuOutlined />}
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="duration-300 ease-out-in transform transition oveflow-hidden"
                enterFrom="max-h-0 opacity-0"
                enterTo="max-h-screen opacity"
                leave="duration-300 ease-in-out"
                leaveFrom="max-h-screen opacity-100"
                leaveTo="max-h-0 opacity-0"
              >
                <Popover.Panel
                  as="nav"
                  className="absolute inset-0 bottom-auto top-20 origin-top transform list-none bg-white transition-all"
                >
                  {navigation.map(({ title, href }) => (
                    <li>
                      <a
                        href={href}
                        className="block rounded-md border-b-2 border-gray-100 py-2 px-5 text-base font-normal"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </header>
  );
};

export default NavHeader;
