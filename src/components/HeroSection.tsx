// HeroSection.js
import React from 'react';
import HeroBackground from '../assets/images/Hero-bg.jpg';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
      return (
            <div className="bg-cover bg-center h-96" style={{ backgroundImage: `url(${HeroBackground})` }}>
                  <div className="flex flex-col items-center justify-center h-full px-4">
                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] text-center">Welcome to My Portfolio</h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-zinc-500 mt-2 md:mt-4 text-center">Building innovative web solutions</p>

                        {/* Social Media Links */}
                        <div className="flex space-x-4 mt-4 md:mt-6">
                              <a href="https://twitter.com" className="text-[#1a1a1a] hover:text-blue-500">
                                    <FaTwitter />
                              </a>
                              <a href="https://linkedin.com" className="text-[#1a1a1a] hover:text-blue-700">
                                    <FaLinkedin />
                              </a>
                              <a href="https://github.com" className="text-[#1a1a1a] hover:text-gray-500">
                                    <FaGithub />
                              </a>
                              {/* Add other social media links as needed */}
                        </div>
                  </div>
            </div>
      );
};

export default HeroSection;
