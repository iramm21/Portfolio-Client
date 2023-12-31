// AboutSection.js
import React from 'react';
import ProfileImage from '../assets/images/me.jpg'; // Replace with your profile image path
import { FaBirthdayCake, FaPhone, FaEnvelope, FaHome, FaLanguage, FaUserTie } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const AboutSection = () => {
      return (
            <div className="bg-[#1a1a1a] text-white p-4 md:p-10">
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                        {/* Image */}
                        <img src={ProfileImage} alt="Profile" className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 md:mb-0 md:mr-8" />

                        {/* About Details */}
                        <div>
                              <h2 className="text-2xl md:text-3xl font-bold mb-2">Hi There! I'm Isaac Ramm</h2>
                              <h3 className="text-lg md:text-xl font-semibold mb-4">Full-Stack Developer & Designer</h3>
                              <p className="text-sm md:text-base mb-4">
                                    I am a Full Stack developer with a passion for creating innovative web solutions. I have experience working with a range of technologies including React, Node.js, Express, MongoDB, MySQL, and more. I am also a designer with experience using Figma and Adobe Photoshop.
                              </p>
                              <ul className="text-xs md:text-sm mb-4">
                                    <li className="flex items-center mb-2"><FaBirthdayCake className="mr-2" /> Dec 13, 2001</li>
                                    <li className="flex items-center mb-2"><FaPhone className="mr-2" /> +61 456-150-068</li>
                                    <li className="flex items-center mb-2"><FaEnvelope className="mr-2" /> isaac.ramm@outlook.com</li>
                                    <li className="flex items-center mb-2"><FaHome className="mr-2" /> QLD, Australia</li>
                                    <li className="flex items-center mb-2"><FaLanguage className="mr-2" /> English</li>
                                    <li className="flex items-center mb-2"><FaUserTie className="mr-2" /> Available for Freelance</li>
                              </ul>
                              <a href="path_to_resume.pdf" download className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                                    <MdDownload className="mr-2" /> Download CV
                              </a>
                        </div>
                  </div>
            </div>
      );
};

export default AboutSection;
