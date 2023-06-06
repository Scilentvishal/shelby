import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const router = useRouter();
  const isActive = (path) => {
    return router.pathname === path
      ? 'underline underline-offset-4 text-[#DAA520]'
      : 'no-underline';
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = currentScrollPos > 0;

      setIsSticky(isScrolledDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navbarClasses = `fixed w-full transition-all duration-300 ease-in-out z-10 ${
    isSticky ? 'bg-black shadow-lg' : 'bg-transparent'
  }`;

  const logoClasses = `text-white font-bold text-xl ${
    isSticky ? 'py-2' : 'py-4'
  }`;

  return (
    <header className={`text-white body-font ${navbarClasses}`}>
      <div className="container mx-auto flex flex-wrap bg-transparent p-5 flex-col md:flex-row items-center max-w-screen-xl">
        <Link
          href="/"
          className={`flex title-font font-medium items-center text-[#DAA520] mb-4 md:mb-0`}
        >
          <Image src="/logo.png" width={50} height={50} alt="shelbys logo" />
          {/* <span className="ml-3 text-xl">Shelby&apos;s</span> */}
        </Link>
        <nav className="lg:ml-auto lg:mx-0 mx-auto lg:py-0 py-8 lg:relative absolute lg:top-0 lg:right-auto lg:left-auto right-0 left-0 top-20 lg:w-auto w-full lg:flex hidden lg:bg-transparent text-xl bg-black lg:flex-row flex-col flex-wrap items-center justify-center">
          <Link
            href="/"
            className={`${isActive('/')} mr-5 hover:text-[#DAA520]`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${isActive('/about')} mr-5 hover:text-[#DAA520]`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`${isActive('/services')} mr-5 hover:text-[#DAA520]`}
          >
            Services
          </Link>
          <Link
            href="/courses"
            className={`${isActive('/courses')} mr-5 hover:text-[#DAA520]`}
          >
            Courses
          </Link>
          <Link
            href="/portfolio"
            className={`${isActive('/portfolio')} mr-5 hover:text-[#DAA520]`}
          >
            Portfolio
          </Link>
          <Link
            href="/book"
            className={`${isActive('/book')} mr-5 hover:text-[#DAA520]`}
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
