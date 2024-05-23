// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';

function Layout() {
  return (
    <div className='layout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
