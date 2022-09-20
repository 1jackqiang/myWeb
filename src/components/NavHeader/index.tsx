import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';

import { IconFont } from '@/components/IconFont';

const NavHeader: React.FC = () => {
  return (
    <Popover className="relative bg-white">
      <header className="flex items-center justify-between border-b-2 border-gray-100 px-4 py-5 md:justify-start">
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
            className="whitespace-nowrap rounded border-b-2 border-blue-500 px-4 py-2 text-base font-light leading-4 text-blue-500 shadow-sm"
          >
            注册
          </a>
        </div>
      </header>
    </Popover>
  );
};

export default NavHeader;
