import React from "react";
import { TextHoverEffect } from "../components/ui/text-hover-effect";
import Navbar from '../components/Navbar';
import VideoBack from '../Assets/Background.mp4';
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";


export default function Contact() {
  return (
    <>
      <div className='relative w-full h-screen bg-black overflow-hidden'>
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={VideoBack}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Navbar component */}
        <Navbar />

        {/* Contact Section */}
        <div className="absolute z-20 flex flex-col justify-center items-center text-center w-full h-auto px-4">
          {/* Text hover effect */}
          <TextHoverEffect text="Contact" />

          {/* Social media icons */}
          <div className="flex flex-wrap justify-center items-center gap-7 text-white mt-16">
            <a href='https://www.instagram.com/ktisislabs/' target='blank_' className="flex flex-col items-center hover:text-yellow-500 transition-all">
              <GrInstagram className='w-5 h-5 sm:w-8 sm:h-8' />Instagram
            </a>
            <a href='https://www.linkedin.com/company/ktisis-labs' target='blank_' className="flex flex-col items-center hover:text-blue-500 transition-all">
              <FaLinkedinIn className='w-6 h-6 sm:w-8 sm:h-8' />Linkedin
            </a>
            <a href='https://x.com/KtisisL24135' target='blank_' className="flex flex-col items-center hover:text-gray-500 transition-all">
              <BsTwitterX className='w-6 h-6 sm:w-8 sm:h-8' />X.com
            </a>
            <a href='mailto:connect.ktisislabs@gmail.com' target='_blank' className="flex flex-col items-center hover:text-red-500 transition-all">
              <SiGmail className='w-6 h-6 sm:w-8 sm:h-8' />Gmail
            </a>
            <a href="tel:+919289183829" className="flex flex-col items-center hover:text-green-500 transition-all">
              <IoCall className='w-6 h-6 sm:w-8 sm:h-8' />+91 9289183829
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
