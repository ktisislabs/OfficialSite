import React from 'react';
import '../Styles/Homepage.css';
import Navbar from '../components/Navbar';
import VideoBack from '../Assets/Background.mp4';

import Testimonials from '../components/Testimonials';
import { BentoGridThirdDemo } from '../components/smallabout'; // Import the FeaturesSectionDemo component
import Footer from '../components/Footer';




function HomePage() {
  return (
    <>
      <div className="Homepage-Container w-full h-screen bg-black overflow-auto relative">
        {/* Navbar */}
        <Navbar />

        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={VideoBack}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Hero Section */}
        <div className="Hero-Section w-full h-full flex items-center justify-start relative p-8">
          <div className="Hero-text w-1/2 mb-16">
            <p className="Hero-text-1 text-white text-8xl font-semibold font-poppins drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
              Empowering Ideas
            </p>
            <p className="Hero-text-2 text-white text-6xl font-poppins font-semibold my-5 drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
              Engineering Success
            </p>
            <a href="mailto:connect.ktisislabs@gmail.com">
              <button className="bg-white text-black border border-1 border-black font-semibold py-4 font-regular px-4 text-md font-poppins rounded-full hover:text-white hover:bg-black">
                Let's Connect
              </button>
            </a>
          </div>
        </div>

       

        {/* Features Section */}
        <section>
          <BentoGridThirdDemo /> {/* Include FeaturesSectionDemo */}
        </section>

        {/* Testimonials Section */}
        <section>
          <Testimonials />
        </section>
        
        <section>
          <Footer/>
        </section>
       
         
    
      
         
       
      </div>
    </>
  );
}

export default HomePage;
