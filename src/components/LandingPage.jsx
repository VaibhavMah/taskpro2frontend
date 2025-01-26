import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col">
      {/* Header Section */}
      <header className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Taskify</h1>
        <nav className="hidden lg:flex space-x-4">
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </Link>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Register
          </Link>
        </nav>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Open Menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="w-64 bg-white shadow-lg rounded-lg p-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-end w-full text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Close Menu</span>
            </button>
            <nav className="mt-4 space-y-4">
              <Link
                to="/about"
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/login"
                className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row items-center mt-12 lg:mt-20 max-w-5xl mx-auto px-6 lg:px-0">
        {/* Left Section */}
        <div className="text-center lg:text-left flex-1">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Organize your <span className="text-blue-600">work</span> and <span className="text-blue-600">life</span>, finally.
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Simplify life for both you and your team with the world's #1 task manager and to-do list app.
          </p>
          <Link
            to="/register"
            className="mt-6 inline-block bg-red-500 text-white text-lg px-6 py-3 rounded shadow hover:bg-red-600"
          >
            Start for Free
          </Link>
        </div>

        {/* Right Section */}
        <div className="mt-12 lg:mt-0 lg:ml-16 flex-1">
          <img
            src="https://via.placeholder.com/400x300" // Replace with an actual image URL
            alt="Dashboard Preview"
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center mt-16 py-4 border-t">
        <p className="text-gray-500">&copy; 2025 Taskify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
