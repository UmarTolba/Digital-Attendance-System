import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./welcome.css";

function Welcome() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold text-indigo-600">AttendEase</h1>
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
    
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Modern Digital
                <span className="text-indigo-600"> Attendance</span> System
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Streamline your attendance tracking with our AI-powered digital solution. 
                Save time, reduce errors, and get real-time insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg">
                  Start Free Trial
                </button>
                <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
    
          <div id="features" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Everything you need to manage attendance efficiently
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
                  <p className="text-gray-600">Mark attendance from any device, anywhere with our responsive design</p>
                </div>
                
                <div className="text-center p-6">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Reports</h3>
                  <p className="text-gray-600">Generate instant reports and analytics for better decision making</p>
                </div>
                
                <div className="text-center p-6">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                  <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee</p>
                </div>
              </div>
            </div>
          </div>
    
          <div className="bg-indigo-600 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Attendance Management?</h2>
              <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join thousands of organizations that trust our digital attendance system
              </p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
                Get Started Today
              </button>
            </div>
          </div>
    
          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">AttendEase</h3>
                  <p className="text-gray-400">Modern digital attendance solutions for modern businesses.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Product</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white">Features</a></li>
                    <li><a href="#" className="hover:text-white">Pricing</a></li>
                    <li><a href="#" className="hover:text-white">API</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Company</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white">About</a></li>
                    <li><a href="#" className="hover:text-white">Blog</a></li>
                    <li><a href="#" className="hover:text-white">Careers</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Support</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white">Help Center</a></li>
                    <li><a href="#" className="hover:text-white">Contact</a></li>
                    <li><a href="#" className="hover:text-white">Status</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 AttendEase. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      );
}

export default Welcome;