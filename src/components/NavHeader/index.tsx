import React from 'react';
import { IconFont } from '@/components/IconFont';
import Link from 'next/link';

const NavHeader: React.FC = () => {
	return (
		<header className="eb-header flex items-center justify-between">
			<span className="eb-header-logo">
				<Link href="/">
					<img src="/images/logo.png" alt="易搭云" />
				</Link>
			</span>
			<span>登录</span>
			<IconFont type="icon-enter" />
		</header>
	);
};

export default NavHeader;
