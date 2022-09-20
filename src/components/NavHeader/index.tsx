import Link from 'next/link';
import React from 'react';

import { IconFont } from '@/components/IconFont';

const NavHeader: React.FC = () => {
  return (
    <header className="eb-header flex items-center justify-between">
      <span className="eb-header-logo">
        <Link href="/">
          <img src="/images/logo.png" alt="易搭云" />
        </Link>
      </span>
      <span className="flex flex-nowrap md:space-x-2">
        <span className="btn btn-ghost btn-sm">登录</span>
        <span className="btn btn-outline btn-primary btn-sm">注册</span>
        <IconFont type="icon-enter" />
      </span>
    </header>
  );
};

export default NavHeader;
