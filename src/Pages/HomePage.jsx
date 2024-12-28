import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import HomePageScene from "../components/HomepageScene";
import ServiceHero from "../components/ServiceHero";
import SubHero from '../components/SubHero';
import { Helmet } from 'react-helmet';
import NewsLetterModal from '../components/NewsLetterModal';
import '../Styles/Homepage.css';

function HomePage() {
  const [newsModal, setNewsModal] = useState(false);

  useEffect(() => {
    const newsModaltimer = setTimeout(() => {
      setNewsModal(true);
    }, 2000);

    return () => {
      clearTimeout(newsModaltimer);
    };
  }, []);

  const handleClose = () => {
    setNewsModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Home | KtisisLabs</title>
        <meta name="description" content="Welcome to the home page of KtisisLabs, where innovation meets engineering." />
        <meta name="keywords" content="React, Web Development, KtisisLabs, Innovation, Engineering" />
      </Helmet>

      {newsModal ? (<NewsLetterModal handleClose={handleClose} />) : null}

      <div className="Homepage-Container max-w-screen max-h-screen bg-black overflow-y-auto overflow-x-hidden relative z-20">
        
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="Hero-Section w-screen h-screen flex items-center justify-center relative px-4 sm:px-8 z-0">
          <div className="absolute top-0 left-0 w-full h-full z-[-10]">
            <HomePageScene />
          </div>
          <div className="Hero-text w-full max-w-screen-md mx-auto text-center">
            <p className="Hero-text-1 text-white text-lg sm:text-md md:text-3xl lg:text-2xl font-regular font-poppins drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
              Empowering Ideas
            </p>
            <p className="Hero-text-2 text-white text-5xl sm:text-xl md:text-4xl lg:text-4xl font-poppins font-semibold my-5 drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
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
        <ServiceHero />

        {/* Testimonials Section */}
        <Testimonials />

        {/* SubHero Section */}
        <SubHero />

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
