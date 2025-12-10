import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Digital Attendance System</h3>
                  <p className="text-gray-400">Modern digital attendance solutions for modern Universities.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Socials</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="https://www.instagram.com/eslscaeg/" className="hover:text-white">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/school/eslscauniversity" className="hover:text-white">LinkedIn</a></li>
                    <li><a href="https://www.youtube.com/c/eslscaeg" className="hover:text-white">Youtube</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Company</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="https://www.eslsca.edu.eg" className="hover:text-white">About ESLSCA</a></li>
                    <li><a href="https://eslsca.edu.eg/undergraduate-admission/" className="hover:text-white">Admissions</a></li>
                    <li><a href="https://eslsca.edu.eg/career-center/" className="hover:text-white">Careers</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Support</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="https://eslsca.edu.eg/wellness-center/" className="hover:text-white">Wellness Center</a></li>
                    <li><a href="https://eslsca.edu.eg/research-center/" className="hover:text-white">Research Center</a></li>
                    <li><a href="https://eslsca.edu.eg/job-openings/" className="hover:text-white">Job Openings</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                </div>
              </div>
            </footer>
    );
  }


export default Footer;
