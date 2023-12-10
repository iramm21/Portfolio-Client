// ContactSection.js
import React from 'react';
import { FaEnvelope, FaPhone, FaHome, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactSection = () => {
      return (
            <div className="bg-[#1a1a1a] text-white py-12">
                  <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                              <h2 className="text-4xl font-bold">Get in Touch</h2>
                              <p className="text-xl mt-4">Let's talk about everything!</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div>
                                    {/* Contact Information */}
                                    <div className="mb-4">
                                          <FaEnvelope className="inline mr-2" />
                                          email@example.com
                                    </div>
                                    <div className="mb-4">
                                          <FaPhone className="inline mr-2" />
                                          +123 456 7890
                                    </div>
                                    <div className="mb-4">
                                          <FaHome className="inline mr-2" />
                                          123 Street, City, Country
                                    </div>
                                    {/* Social Links */}
                                    <div className="flex mt-4">
                                          <a href="https://facebook.com" className="mr-4 hover:text-blue-600">
                                                <FaFacebookF />
                                          </a>
                                          <a href="https://twitter.com" className="mr-4 hover:text-blue-400">
                                                <FaTwitter />
                                          </a>
                                          <a href="https://linkedin.com" className="mr-4 hover:text-blue-700">
                                                <FaLinkedinIn />
                                          </a>
                                    </div>
                              </div>
                              <div>
                                    {/* Contact Form */}
                                    <form className="flex flex-col">
                                          <input type="text" placeholder="Your Name" className="mb-4 p-2 bg-transparent border-2 border-gray-400 rounded" />
                                          <input type="email" placeholder="Your Email" className="mb-4 p-2 bg-transparent border-2 border-gray-400 rounded" />
                                          <textarea placeholder="Your Message" className="mb-4 p-2 bg-transparent border-2 border-gray-400 rounded" rows={4}></textarea>
                                          <button type="submit" className="bg-blue-600 hover:bg-blue-700 p-2 rounded">Send Message</button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ContactSection;
