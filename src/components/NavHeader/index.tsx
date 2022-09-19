import React from 'react';
import { IconFont } from '@/components/IconFont';

const NavHeader: React.FC = () => {
	return (
		<header className="flex h-40 justify-between">
			<span>img</span>
			<span>登录</span>
			<IconFont type="icon-enter" />
		</header>
	);
};

export default NavHeader;
