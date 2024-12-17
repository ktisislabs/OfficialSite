import React from 'react';
import Herocta from '../Assets/herocta.jpg';

function SubHero() {
  return (
    <>
      <section className="w-screen h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image */}
        <img
          src={Herocta}
          alt="background-image"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />

        {/* Heading */}
        <h1 className="font-poppins font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
          Let’s build <br />
          <span className="font-extrabold text-white">innovate together</span>
        </h1>

        {/* Subtext */}
        <p className="font-poppins text-gray-300 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8">
          Take the first step towards a brighter future and supercharge your
          business with cutting-edge technologies, expert guidance, and unparalleled support.
        </p>

        {/* Button */}
        <button className="bg-white text-black font-medium rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition duration-300">
          Get in Touch <span className="ml-2">•</span>
        </button>
      </section>
    </>
  );
}

export default SubHero;
