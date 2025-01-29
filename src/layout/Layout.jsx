import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import Newsletter from '../components/shared/Newsletter';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="relative flex-1">
        <Outlet />
      </main>
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default Layout;
