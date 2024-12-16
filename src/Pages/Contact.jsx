import React from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";


export default function Contact() {
  return (
    <>
      <div className="relative w-full min-h-screen bg-black overflow-y-auto">
        {/* Navbar component */}
        <Navbar />

        {/* Contact Section */}
        <div className="Contact-Section flex flex-col justify-center items-center text-center w-full h-auto px-4 py-8">
          <p className="text-white font-poppins text-5xl font-medium mb-16">Get Your Quote</p>

          {/* Form Section */}
          <div className="Form-Section flex flex-wrap items-center justify-center w-full max-w-6xl">
            {/* Left Text Section */}
            <div className="Form-Text flex flex-col items-start justify-center w-full lg:w-1/2 px-6 mb-8 lg:mb-0">
              <p className="text-white font-poppins text-3xl font-medium mb-4">Tell us about your project</p>
              <p className="text-lg text-gray-400 text-left">
                We’d love to hear from you! Whether you have a question, need assistance, 
                or want to explore how we can collaborate, feel free to reach out.
              </p>
            </div>

            {/* Right Form Section */}
            <form className="w-full lg:w-1/2 bg-black border border-gray-200 rounded-xl p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-white text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-white text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobilenumber" className="block text-gray-300 font-medium mb-2">Mobile Number</label>
                <input
                  type="text"
                  id="mobilenumber"
                  name="mobilenumber"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-white text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Mobile Number"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="project" className="block text-gray-300 font-medium mb-2">Project Details</label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-white text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Project Details"
                />
              </div>

              <button className="w-full py-3 rounded-full bg-white text-black hover:bg-black hover:text-white hover:border hover:border-white">
                Submit
              </button>
            </form>
          </div>

              





        </div>
        <Footer/>
      </div>
    </>
  );
}
