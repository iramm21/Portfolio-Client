// Nav.js
import React from 'react';

const Nav = () => {
      return (
            <nav className="bg-[#1a1a1a] text-white shadow-lg">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-3">
                              {/* Logo */}
                              <div className="font-bold text-xl">Logo</div>

                              {/* Navigation Items */}
                              <ul className="hidden md:flex space-x-6">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#contact">Contact</a></li>
                              </ul>

                              <span>|</span>

                              {/* Phone Number */}
                              <div className="hidden lg:block">
                                    <a href="tel:+61456150068">0456 150 068</a>
                              </div>

                              {/* Mobile Menu Button */}
                              <div className="md:hidden">
                                    {/* Implement toggle functionality for mobile menu */}
                                    <button>Menu</button>
                              </div>
                        </div>
                  </div>
            </nav>
      );
}

export default Nav;
