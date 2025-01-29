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
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </Link>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Register
          </Link>
        </nav>
        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="inline-flex items-center justify-center rounded-md p-2 text-gray-700">
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Open Menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="w-64 bg-white shadow-lg rounded-lg p-4">
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-end w-full text-gray-700">
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Close Menu</span>
            </button>
            <nav className="mt-4 space-y-4">
              <Link to="/login" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setMobileMenuOpen(false)}>
                Register
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row items-center mt-12 lg:mt-20 max-w-5xl mx-auto px-6 lg:px-0">
        <div className="text-center lg:text-left flex-1">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Organize your <span className="text-blue-600">work</span> and <span className="text-blue-600">life</span>, finally.
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Simplify life with the task manager and get email reminders so that you never miss out.
          </p>
          <Link to="/register" className="mt-6 inline-block bg-red-500 text-white text-lg px-6 py-3 rounded shadow hover:bg-red-600">
            Start for Free
          </Link>
        </div>
        <div className="mt-12 lg:mt-0 lg:ml-16 flex-1">
          <img src="https://imgs.search.brave.com/fR3J9ipkoSfO8GSQXc5b07_hU4RhZZgAvlUCIp_CJaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jcm9w/cGVkLWltYWdlLXdv/bWFuLXdyaXRpbmct/dGFza3MtaW5zY3Jp/cHRpb24taXNvbGF0/ZWQtd2hpdGUtMTE0/NTYyNzgyLmpwZw" alt="Dashboard Preview" className="rounded-lg shadow-lg" />
        </div>
      </main>

      {/* Features Section */}
      <section className="mt-16 max-w-5xl mx-auto px-6 lg:px-0">
        <h3 className="text-3xl font-bold text-gray-800 text-center">Why Choose Taskify?</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-blue-600">Task Management</h4>
            <p className="text-gray-600 mt-2">Easily create, update, and organize your tasks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-blue-600">Email Reminders</h4>
            <p className="text-gray-600 mt-2">Never forget a task with automated email reminders.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-blue-600">Collaboration</h4>
            <p className="text-gray-600 mt-2">Work with your team and assign tasks efficiently.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-16 max-w-5xl mx-auto px-6 lg:px-0">
        <h3 className="text-3xl font-bold text-gray-800 text-center">What Our Users Say</h3>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">"Taskify has completely changed how I organize my work! Highly recommended."</p>
            <p className="text-blue-600 font-bold mt-4">- Sryash Maheshwari</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">"Super intuitive and the email reminders keep me on track every day."</p>
            <p className="text-blue-600 font-bold mt-4">- Anay Gupta</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center mt-16 py-4 border-t">
        <p className="text-gray-500">&copy; 2025 Taskify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
