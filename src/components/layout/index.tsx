import React from 'react';

import Footer from '../footer';
import NavHeader from '../nav-header';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <NavHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
