import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./welcome.css";

function Welcome() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <NavBar/>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Modern Digital
                <span className="text-indigo-600"> Attendance</span> System
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Streamline your attendance tracking with our system designed for efficiency and ease of use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">


              </div>
            </div>
          </div>
    
          <div id="features" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Everything you need to manage attendance efficiently and securely
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Packed with our QR Code attendance marking</h3>
                  <p className="text-gray-600">Mark attendance using QR codes for quick and accurate tracking</p>
                </div>
                
                <div className="text-center p-6">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Time QR code generation</h3>
                  <p className="text-gray-600">Generate instant QR codes for attendance marking in an instant</p>
                </div>
                
                <div className="text-center p-6">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure and Reliable QR Code System</h3>
                  <p className="text-gray-600">Helps ensure secure and reliable attendance marking with our QR code system</p>
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
              <button href="/login" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
                Login
              </button>
            </div>
          </div>
    
          {/* Footer */}
          <Footer/>
        </div>
      );
}

export default Welcome;