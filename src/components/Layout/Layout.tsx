import { FC } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: FC = ({ children }): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-initial order-2 flex-grow">
        <div className="max-w-screen-xl mx-auto p-4">{children}</div>
      </div>
      <div className="flex-initial order-1">
        <Navbar />
      </div>
      <div className="flex-initial order-3">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
