import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white px-4 py-3 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-amber-700"
        >
          Ghardekho
        </Link>

        <div className="flex-1 px-2 md:px-6">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          />
        </div>

        <nav className="flex items-center gap-4 text-sm font-medium text-gray-700 md:gap-6">
          <Link to="/" className="transition hover:text-amber-700">
            Home
          </Link>
          <Link to="/about" className="transition hover:text-amber-700">
            About
          </Link>
          <Link
            to="/signin"
            className="rounded-md bg-amber-600 px-3 py-1.5 text-white transition hover:bg-amber-700"
          >
            SignIn
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
