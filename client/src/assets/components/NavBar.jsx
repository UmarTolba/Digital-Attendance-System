import React from "react";
import "./NavBar.css";
import { Link } from "react-router";
function NavBar() {
  return (
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold text-indigo-600">Digital Attendance System</h1>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a href="#features" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                    <a href="#pricing" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                    <a href="#contact" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                  </div>
                </div>
                <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300">
                  Login
                </Link>
              </div>
            </div>
          </nav>
  );
}

export default NavBar;
