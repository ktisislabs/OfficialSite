import React from 'react';
import { TestimonialsData } from '../Data/testimonials';

function Testimonials() {
  return (
    <>
      <section className="Testimonials-section w-full h-auto bg-black py-12 mt-36">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold font-bold text-center text-white mb-8">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TestimonialsData.map((item) => (
              <div
                key={item.id}
                className="testimonial-card bg-black text-white p-6 rounded-lg border shadow hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={item.profileImage}
                    alt={`${item.Name}'s profile`}
                    className="w-16 h-16 rounded-full border-2 border-gray-600"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.Name}</h3>
                    <p className="text-sm text-gray-400">{item.Designation || "Valued Client"}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-gray-300 italic">"{item.Remark}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
