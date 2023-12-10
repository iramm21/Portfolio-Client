// PortfolioSection.js
import React from 'react';
// Import your images or use a placeholder
import Image1 from '../assets/portfolio/Project1.jpg';
import Image2 from '../assets/portfolio/Project2.jpg';
import Image3 from '../assets/portfolio/Project3.jpg';
// ... import other images

const portfolioItems = [
      { id: 1, src: Image1, title: 'Project Title 1', description: 'Brief description' },
      { id: 2, src: Image2, title: 'Project Title 2', description: 'Brief description' },
      { id: 3, src: Image3, title: 'Project Title 3', description: 'Brief description' },
      // ... add other portfolio items
];

const PortfolioSection = () => {
      return (
            <div className="bg-[#1a1a1a] text-white py-12">
                  <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                              <h2 className="text-4xl font-bold">Portfolio</h2>
                              <p className="text-xl mt-4">Check out some of my works below.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                              {portfolioItems.map((item) => (
                                    <div key={item.id} className="shadow-lg group container rounded-md bg-white relative overflow-hidden">
                                          <img src={item.src} alt={item.title} className="object-cover object-center h-full w-full transition duration-500 ease-in-out transform group-hover:scale-110" />
                                          <div className="absolute bottom-0 left-0 px-3 py-4">
                                                <h3 className="text-lg text-gray-900 group-hover:text-white">{item.title}</h3>
                                                <p className="text-gray-600 group-hover:text-white text-sm">{item.description}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default PortfolioSection;
