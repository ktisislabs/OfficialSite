import React from "react";
import { TextHoverEffect } from "../components/ui/text-hover-effect";
import Navbar from '../components/Navbar';
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";

export default function Contact() {
  return (
    <>
      <div className='relative w-full h-screen bg-black overflow-y-auto'>
        {/* Navbar component */}
        <Navbar />
        <TextHoverEffect text="Contact" />
        {/* Contact Section */}
        <div className="absolute z-20 flex flex-col justify-center items-center text-center w-full h-auto px-4">
          {/* Text hover effect */}
        

          {/* Form Section */}
          <form 
            className="border w-full max-w-lg bg-white shadow-lg p-6 rounded-md mt-1"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted!'); // Replace with API call for form submission
            }}
          >
            <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>

            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Phone Number"
              />
            </div>

            {/* Project Details Field */}
            <div className="mb-4">
              <label htmlFor="details" className="block text-gray-700 font-medium mb-2">Project Details</label>
              <textarea
                id="details"
                name="details"
                rows="4"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Briefly describe your project"
              ></textarea>
            </div>

            {/* Budget Field */}
            <div className="mb-4">
              <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">Estimated Budget</label>
              <input
                type="text"
                id="budget"
                name="budget"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Budget (optional)"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>

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
