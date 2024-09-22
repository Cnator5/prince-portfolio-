"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-indigo-600 to-indigo-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-white">
                AMBE
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                About
              </Link>
              <Link href="/services" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Services
              </Link>
              <Link href="/portfolio" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Portfolio
              </Link>
              <Link href="/contact" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Contact
              </Link>
              <a
                href="/path-to-your-cv.pdf"
                download
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="fixed inset-y-0 left-0 w-3/4 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg transition-all duration-300 ease-in-out">
            <Link href="/" className="hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              About
            </Link>
            <Link href="/services" className="hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Services
            </Link>
            <Link href="/portfolio" className="hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Contact
            </Link>
            <Link
              href="/path-to-your-cv.pdf"
              download
              className="bg-yellow-400 hover:bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Download CV
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;