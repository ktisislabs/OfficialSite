import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../Styles/Services.css';
import { Link } from 'react-router-dom';

function Services() {

const CustomLinks=[
  "/Services/CustomSoftwareSolutions",
  "/Services/MobileApplicationDevelopment",
  "/Services/WebApplicationDevelopment",
  "/Services/WebandUI/UXDesign",
  "/Services/QualityAssurance",
  "/Services/DeploymentandMaintence"
]

  return (
    <>
      {/* Navbar */}
      <div className="bg-black">
        <Navbar />
      </div>

      {/* Services Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We believe in a collaborative approach, working closely with our clients to understand their goals and target audience.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left - Consultation Form */}
            <div className="bg-white text-black h-96 p-8 rounded-lg shadow-lg lg:w-1/3">
              <h3 className="text-2xl font-bold mb-6">Let's Connect !</h3>
              <form className="space-y-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right - Service List */}
            <div className="flex-1">
              <ul className="space-y-8">
                {[
                  'Custom Software Development',
                  'Mobile Application Development',
                  'Web Application Development',
                  'Web and UI / UX Design',
                  'Software Testing',
                  'Deployment and Maintence',
                ].map((service, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b border-gray-700 pb-4 group cursor-pointer"
                  >
                  <Link to={CustomLinks[index]}> <h3 className="text-2xl font-medium group-hover:text-gray-400 transition">
                      {service}
                    </h3></Link> 
                    <span className="text-2xl text-gray-400 group-hover:text-white transition">
                      →
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Services;
