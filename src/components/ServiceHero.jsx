import React from 'react';
import { ServiceHerData } from '../Data/Services';
import Herocta from '../Assets/servicebg.jpg';

function ServiceHero() {
  return (
    <section className="relative w-screen h-auto py-12 flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <img
          src={Herocta}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section Header */}
      <div className="text-center mb-12 z-20">
        <p className="font-poppins font-medium rounded-lg text-sm text-black p-2 my-3 bg-white inline-block">
          Our Services
        </p>
        <p className="font-poppins text-white font-semibold text-4xl sm:text-5xl mb-4">
          How can we help you ?
        </p>
        <p className="font-poppins text-white font-regular text-center sm:text-lg w-full max-w-lg mx-auto">
          Transparency, reliability, and outstanding customer experiences are at the core of our values. We take pride in fostering strong relationships with our clients, communicating openly at every stage of the development process.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4 z-20">
        {ServiceHerData.map((service) => (
          <div
            key={service.id}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="font-poppins flex flex-col items-center font-semibold text-lg mb-2 text-center">
              <p className="text-4xl my-4">{service.icons || '🚀'}</p>
              {service.Service_name}
            </h3>
            <p className="font-poppins text-sm text-gray-700 text-center">
              {service.Service}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceHero;
