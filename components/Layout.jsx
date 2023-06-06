import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import NextNProgress from 'nextjs-progressbar';

const Layout = ({ children }) => {
  return (
    <div
      className="relative bg-black"
      // style={{
      //   backgroundImage: 'url(/pexels-bogdan-krupin-12049700.jpg)',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      // }}
    >
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <NextNProgress height={6} color="#07F300" />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
