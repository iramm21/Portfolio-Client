// Nav.js
import React, { useState } from 'react';

const Nav = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      return (
            <nav className="bg-[#1a1a1a] text-white shadow-lg">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-3">
                              {/* Logo */}
                              <div className="font-bold text-xl">Logo</div>

                              {/* Navigation Items for larger screens */}
                              <ul className={`hidden md:flex space-x-6 ${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative bg-[#1a1a1a] md:bg-transparent w-full md:w-auto left-0 md:left-auto top-full md:top-auto`}>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#contact">Contact</a></li>
                              </ul>

                              {/* Phone Number for larger screens */}
                              <div className="hidden lg:block">
                                    <a href="tel:+61456150068">0456 150 068</a>
                              </div>

                              {/* Mobile Menu Button */}
                              <div className="md:hidden">
                                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>Menu</button>
                              </div>
                        </div>
                  </div>
            </nav>
      );
};

export default Nav;
