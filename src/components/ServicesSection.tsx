// ServicesSection.js
import React from 'react';
// Import your icons from the library you are using
import { FaPaintBrush, FaCode, FaMobileAlt } from 'react-icons/fa';

const services = [
      {
            Icon: FaPaintBrush,
            title: 'Graphic Design',
            description: 'Creating visually stunning designs that are user-friendly and effective.'
      },
      {
            Icon: FaCode,
            title: 'Web Development',
            description: 'Building responsive and dynamic websites with the latest web technologies.'
      },
      {
            Icon: FaMobileAlt,
            title: 'Mobile Apps',
            description: 'Developing mobile applications that provide a seamless user experience.'
      },
      // ... Add more services as needed
];

const ServicesSection = () => {
      return (
            <div className="py-12 bg-[#1a1a1a] text-white">
                  <div className="container mx-auto px-4">
                        <div className="text-center">
                              <h2 className="text-4xl font-bold">Services</h2>
                              <p className="text-xl mt-4">What I Can Do For You</p>
                        </div>
                        <div className="flex flex-wrap justify-center mt-8">
                              {services.map((service, index) => (
                                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                                          <div className="bg-gray-800 shadow-xl rounded-lg p-6 flex flex-col items-center text-center">
                                                <service.Icon className="text-4xl mb-4" />
                                                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                                                <p>{service.description}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default ServicesSection;
