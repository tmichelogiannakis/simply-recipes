import { FC } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-initial order-2 flex-grow">{children}</div>
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
