// PortfolioSection.js
import React from 'react';
// Import your images or use a placeholder
import Image1 from '../assets/portfolio/Project1.jpg';
import Image2 from '../assets/portfolio/Project2.jpg';
import Image3 from '../assets/portfolio/Project3.jpg';
// ... import other images

const portfolioItems = [
      { id: 1, src: Image1, title: 'BasketBuddy', description: 'A Basketball Management / Social App' },
      { id: 2, src: Image2, title: 'Videzy', description: 'A super simple feature rich video editing software' },
      { id: 3, src: Image3, title: 'CampBud', description: 'A Camping App useful for preparation tips tricks and more' },
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
                                                <h3 className="text-lg text-zinc-100 group-hover:text-white">{item.title}</h3>
                                                <p className="text-zinc-200 group-hover:text-white text-sm">{item.description}</p>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default PortfolioSection;
