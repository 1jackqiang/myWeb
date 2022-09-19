import React from 'react';
import NavHeader from '../NavHeader';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<NavHeader />
			{children}
		</div>
	);
};

export default Layout;
