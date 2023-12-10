// TestimonialsSection.js
import React from 'react';
import Slider from 'react-slick';

const testimonials = [
      {
            id: 1,
            author: 'Jane Doe',
            content: 'Their work is of superb quality and exceeds expectations.'
      },
      {
            id: 2,
            author: 'John Smith',
            content: 'A real pleasure to work with and delivered excellent results.'
      },
      {
            id: 3,
            author: 'Emma Jones',
            content: 'Creative, responsive, and professional. Highly recommend.'
      },
      // ...other testimonials
];

const TestimonialsSection = () => {
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: "linear"
      };

      return (
            <div className="py-12 bg-[#1a1a1a] text-white">
                  <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                              <h2 className="text-4xl font-bold">Testimonials</h2>
                              <p className="text-xl mt-4">What people say about us.</p>
                        </div>
                        <Slider {...settings}>
                              {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="outline-none">
                                          <blockquote className="text-center p-4 italic font-medium">
                                                "{testimonial.content}"
                                                <div className="mt-4 font-bold">{testimonial.author}</div>
                                          </blockquote>
                                    </div>
                              ))}
                        </Slider>
                  </div>
            </div>
      );
};

export default TestimonialsSection;
