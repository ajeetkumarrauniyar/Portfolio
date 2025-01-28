import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';

const Layout = ({ children, useCustomLayout = false }) => {
  const location = useLocation();

  // If we're on the JS Projects page or using a custom layout,
  // don't wrap with the default layout
  if (useCustomLayout || location.pathname === '/js-projects') {
    return children;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="relative flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
