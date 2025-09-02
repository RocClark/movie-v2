"use client";
import { useState, useContext } from "react";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open/close
  };

  return (
    <div className="navbar bg-white shadow">
      <header className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          MovieTitle
        </h1>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden lg:flex items-center space-x-8">
          <p className="text-1xl font-bold tracking-tight text-gray-900">
            Hello:
          </p>
          <Link
            href="/movieHome"
            className="text-1xl font-bold tracking-tight text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/movieHome/signup"
            className="text-1xl font-bold tracking-tight text-gray-900"
          >
            SignUp
          </Link>
          <Link
            href="/movieHome/logIn"
            className="text-1xl font-bold tracking-tight text-gray-900"
          >
            Login
          </Link>
        </div>

        {/* Menu for smaller screens */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:hidden absolute top-16 right-4 bg-white shadow-lg rounded-md w-48`}
        >
          <p className="block px-4 py-2 text-gray-900 font-bold">Hello: </p>
          <Link
            href="/movieHome"
            className="block px-4 py-2 text-gray-900 font-bold"
          >
            Home
          </Link>
          <Link
            href="/movieHome/signup"
            className="block px-4 py-2 text-gray-900 font-bold"
          >
            SignUp
          </Link>
          <Link
            href="/movieHome/logIn"
            className="block px-4 py-2 text-gray-900 font-bold"
          >
            Login
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
