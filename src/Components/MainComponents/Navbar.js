import React, { useState } from "react";
// import img from "../Assets/google.png"
import { FcFilmReel } from "react-icons/fc";
import { HiMenu } from "react-icons/hi";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-neutral-100 max-w-10xl dark:bg-cyan-600">
      <div className="max-w-10xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <div className="flex justify-between">
                {/* <img className="h-8 w-auto" src={img}/> */}
                <FcFilmReel className="flex justify-between" size={30} />
                <p className="ml-3 font-bold text-white font-sans text-2xl ">
                  ZEROZINEMA
                </p>
              </div>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline">
              <a
                href="/"
                className="px-3 mt-3  py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                Home
              </a>
              <a
                href="/movies"
                className="ml-4 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                Movies
              </a>
              <a
                href="/theatres"
                className="ml-4 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                Theatres
              </a>
              
              <a
                href="/promotions"
                className="ml-4 mt-3 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                Promotions
              </a>
              <a
                href="/feedbackList"
                className="ml-4 mt-3 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                Feedback
              </a>
              
              <a
                href="/contact"
                className="ml-4 mt-3 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                Contact
              </a>
              <a
                href="/about"
                className="ml-4 mt-3 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                About
              </a>
              <a
                href="/login"
                className="ml-4 mt-3 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
              >
                SignIn
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggleMenu}>
              <HiMenu
                className={`block h-6 w-6 fill-current text-neutral-600 dark:text-neutral-200 ${
                  isMenuOpen ? "hidden" : "block"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={"menu " + (isMenuOpen ? "block" : "hidden") + " md:hidden"}
      >
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            Home
          </a>
          <a
            href="/movies"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            Movies
          </a>
          <a
            href="/theatres"
            className="ml-4 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            Theatres
          </a>
          <a
            href="/feedbackAll"
            className="ml-4 mt-3 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            Feedback
          </a>
          
          {/* <Link to="" className="ml-4 mt-3 px-3 py-2 rounded-md text-md font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out">Feedback</Link> */}
          
          <a
            href="/about"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            About
          </a>
          <a
            href="/contact"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            Contact
          </a>
          <a
            href="/login"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-50 focus:outline-none focus:text-neutral-900 dark:focus:text-neutral-50 focus:bg-neutral-100 dark:focus:bg-cyan-600 transition duration-150 ease-in-out"
          >
            SignIn
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
