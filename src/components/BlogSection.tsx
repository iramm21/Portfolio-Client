// BlogSection.js
import React from 'react';
// Placeholder for blog post images
import BlogImage1 from '../assets/blog/blog1.jpg';
import BlogImage2 from '../assets/blog/blog2.jpg';
import BlogImage3 from '../assets/blog/blog3.jpg';
import BackgroundPattern from '../assets/images/Blog-bg.jpg'; // A subtle pattern or gradient background image

const blogPosts = [
      {
            id: 1,
            image: BlogImage1,
            title: 'Blog Post 1',
            excerpt: 'This is a summary of the first blog post.',
      },
      {
            id: 2,
            image: BlogImage2,
            title: 'Blog Post 2',
            excerpt: 'This is a summary of the second blog post.',
      },
      {
            id: 3,
            image: BlogImage3,
            title: 'Blog Post 3',
            excerpt: 'This is a summary of the third blog post.',
      },
      // ...other blog posts
];

const BlogSection = () => {
      return (
            <div className="py-12" style={{ backgroundImage: `url(${BackgroundPattern})`, backgroundSize: 'cover' }}>
                  <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                              <h2 className="text-4xl font-bold text-white">Blog</h2>
                              <p className="text-xl mt-4 text-gray-300">Latest Articles and News</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {blogPosts.map((post) => (
                                    <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-xl bg-[#1a1a1a] transform hover:scale-105 transition duration-500 ease-in-out">
                                          <img className="w-full" src={post.image} alt={post.title} />
                                          <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2 text-white">{post.title}</div>
                                                <p className="text-gray-400 text-base">
                                                      {post.excerpt}
                                                </p>
                                          </div>
                                          <div className="px-6 pt-4 pb-2">
                                                <a href={`/blog/${post.id}`} className="text-indigo-500 hover:text-indigo-600 transition duration-300 ease-in-out">Read More</a>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default BlogSection;
