import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet';
import { useForm } from '@formspree/react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [state, handleSubmit] = useForm("xovvjgvy");

  // Toggle active FAQ
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };
  useEffect(() => {
    if (state.succeeded) {
      toast.success('Thank you for reaching out to us!', {
        duration: 4000,
        position: 'top-center',
      });
    }
  }, [state.succeeded]);
  return (
    <>
         <Helmet>
        <title>Contact Us | Ktisis Labs</title>
        <meta name="description" content="Get in touch with Ktisis Labs. We'd love to hear from you!" />
        <meta name="keywords" content="Contact Ktisis Labs, Support, Inquiry" />
      </Helmet>
      <div className="relative w-full min-h-screen bg-black overflow-y-auto">
        {/* Navbar component */}
        <Navbar />

        {/* Moving Banner */}
        <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-3">
          <p className="text-center text-white font-poppins text-xl font-semibold animate-pulse">
            Let's Connect - Tell us about your project and bring your ideas to life!
          </p>
        </div>

        {/* Contact Section */}
        <div className="Contact-Section flex flex-col justify-center items-center text-center w-full h-auto px-4 py-16">
          <p className="text-white font-poppins text-4xl lg:text-5xl font-medium mb-16">
            Tell Us About Your Project
          </p>

          {/* Form Section */}
          <div className="Form-Section flex flex-wrap items-center justify-center w-full max-w-6xl">
            {/* Left Text Section */}
            <div className="Form-Text flex flex-col items-start justify-center w-full lg:w-1/2 px-6 mb-8 lg:mb-0">
              <p className="text-white font-poppins text-2xl lg:text-3xl font-medium mb-4">
                Share Your Vision
              </p>
              <p className="text-lg text-gray-400 text-left">
                We’d love to hear from you! Whether you have a question, need assistance, or want to explore how we can collaborate, feel free to reach out.
              </p>
            </div>

            {/* Right Form Section */}
            <form className="w-full lg:w-1/2 bg-black border border-gray-600 rounded-xl p-6 shadow-lg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobilenumber"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobilenumber"
                  name="mobilenumber"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Mobile Number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="project"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Project Details"
                />
              </div>

              <button className="w-full py-3 rounded-full bg-white text-black font-medium hover:bg-purple-600">
                Submit
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="FAQ-Section mt-16 w-full max-w-6xl px-6">
            <p className="text-white font-poppins text-3xl font-medium mb-8 text-left">
              Frequently Asked Questions
            </p>
            <div className="flex flex-col gap-6">
              {[
                {
                  question: "How long does it take to receive a quote?",
                  answer:
                    "We typically respond to all inquiries within 24-48 hours with a detailed quote based on your project details.",
                },
                {
                  question: "What types of projects do you handle?",
                  answer:
                    "We handle a wide variety of design and development projects, ranging from small-scale to enterprise-level needs.",
                },
                {
                  question: "How can I track the progress of my project?",
                  answer:
                    "We provide regular updates via email and project management tools. You can also schedule calls with our team for progress reviews.",
                },
                {
                  question: "Can I make changes to my project after submitting the form?",
                  answer:
                    "Absolutely! Feel free to reach out to us at any time, and we’ll accommodate your changes as best as possible.",
                },
                {
                  question: "What is your pricing structure?",
                  answer:
                    "Our pricing is tailored to your project’s scope and business needs.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="FAQ-Item border-b border-gray-600 pb-4"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <p className="text-white font-medium text-xl">
                      {index + 1}. {faq.question}
                    </p>
                    <span className="text-gray-400 text-xl">
                      {activeFAQ === index ? "-" : "+"}
                    </span>
                  </div>
                  {activeFAQ === index && (
                    <p className="text-gray-400 text-lg mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer component */}
        <Footer />
      </div>
    </>
  );
}
