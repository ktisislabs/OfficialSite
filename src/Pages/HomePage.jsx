import React from "react";
import "../Styles/Homepage.css";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import { BentoGridThirdDemo } from "../components/smallabout";
import Footer from "../components/Footer";
import HomePageScene from "../components/HomepageScene";

function HomePage() {
  return (
    <>
      <div className="Homepage-Container w-full min-h-screen bg-black overflow-auto relative z-20">
        {/* Navbar */}
        <Navbar />

        {/* 3D Background Scene */}
        <div className="absolute top-0 left-0 w-full h-full z-[-10]">
          <HomePageScene />
        </div>

        {/* Hero Section */}
        <div className="Hero-Section w-full min-h-[90vh] flex items-center justify-center relative px-4 sm:px-8 z-20">
          <div className="Hero-text w-full max-w-screen-md mx-auto text-center">
            <p className="Hero-text-1 text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-regular font-poppins drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
              Empowering Ideas
            </p>
            <p className="Hero-text-2 text-white text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-poppins font-semibold my-5 drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
              Engineering Success
            </p>
            <a href="mailto:connect.ktisislabs@gmail.com">
              <button className="bg-white text-black border border-black text-sm sm:text-lg md:text-xl font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:text-white hover:bg-black transition-all duration-300">
                Let's Connect
              </button>
            </a>
          </div>
        </div>

        {/* Features Section */}
        <section className="relative px-4 sm:px-8 lg:px-16 py-8 sm:py-12 z-20">
          <BentoGridThirdDemo /> {/* Bento Grid Fix */}
        </section>

        {/* Testimonials Section */}
        <section className="relative px-4 sm:px-8 lg:px-16 py-8 sm:py-12 z-20">
          <Testimonials />
        </section>

        {/* Footer Section */}
        <section className="relative px-4 sm:px-8 lg:px-16 z-20">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default HomePage;
