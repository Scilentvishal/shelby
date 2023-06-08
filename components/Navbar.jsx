import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isActive = (path) => {
    return router.pathname === path
      ? 'underline underline-offset-4 text-[#DAA520]'
      : 'no-underline';
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = currentScrollPos > 80;

      setIsSticky(isScrolledDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navbarClasses = `fixed w-full lg:bg-transperant bg-black transition-all duration-300 ease-in-out z-10 px-5 ${
    isSticky ? 'bg-black shadow-lg py-2' : 'bg-transparent py-5'
  }`;

  const logoClasses = `text-white font-bold text-xl transition-all duration-300 ease-in-out  ${
    isSticky ? 'py-2 w-10' : 'py-4 w-14'
  }`;

  return (
    <header className={`text-white body-font ${navbarClasses}`}>
      <div className="container mx-auto flex flex-wrap bg-transparent flex-row items-center max-w-screen-xl">
        <Link
          href="/"
          className={`flex title-font font-medium items-center text-[#DAA520] mb-4 md:mb-0`}
        >
          <Image
            src="/logo.png"
            className={`${logoClasses} z-40`}
            width={60}
            height={60}
            alt="shelbys logo"
          />
        </Link>
        <div
          className="flex lg:hidden z-40 justify-between flex-col h-6 ml-auto w-6"
          onClick={() => setOpen(!open)}
        >
          <span className="h-1 w-6 bg-white"></span>
          <span className="h-1 w-6 bg-white"></span>
          <span className="h-1 w-6 bg-white"></span>
        </div>
        <nav className="lg:ml-auto lg:mx-0 mx-auto lg:py-0 py-8 lg:relative absolute lg:top-0 lg:right-auto lg:left-auto right-0 left-0  lg:w-auto w-full lg:flex hidden lg:bg-transparent text-xl bg-black lg:flex-row flex-col flex-wrap items-center justify-center">
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
        <ul
          className="md:hidden transition-all py-10 duration-300 fixed h-[100vh] w-full md:w-1/2 bg-black m-0 p-0 font-bold text-gray-300 list-none bottom-0 top-0 flex flex-col items-center z-50"
          style={{ right: open ? '0px' : '-100vw' }}
        >
          <span
            class="inline-block w-11 h-11 absolute right-9 top-9"
            onClick={() => setOpen(false)}
          >
            <span class="inline-block absolute w-10 h-1 bg-white transform rotate-45 translate-x-1.5"></span>
            <span class="inline-block absolute w-10 h-1 bg-white transform -rotate-45 translate-x-1.5"></span>
          </span>
          <Link
            onClick={() => setOpen(false)}
            href="/"
            className={`${isActive('/')} my-4 text-2xl hover:text-[#DAA520]`}
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/about"
            className={`${isActive(
              '/about'
            )} my-4 text-2xl hover:text-[#DAA520]`}
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/services"
            className={`${isActive(
              '/services'
            )} my-4 text-2xl hover:text-[#DAA520]`}
          >
            Services
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/courses"
            className={`${isActive(
              '/courses'
            )} my-4 text-2xl hover:text-[#DAA520]`}
          >
            Courses
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/portfolio"
            className={`${isActive(
              '/portfolio'
            )} my-4 text-2xl hover:text-[#DAA520]`}
          >
            Portfolio
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/book"
            className={`${isActive(
              '/book'
            )} my-4 text-2xl hover:text-[#DAA520]`}
          >
            Book Now
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
