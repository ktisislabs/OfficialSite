import React from 'react';
import Navbar from '../../components/Navbar';
import DeploymentImg from '../../Assets/deployment.jpg';
import DeploymentBG from '../../Assets/deploymentbg.jpg';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function DeploymentAndMaintenance() {
  return (
    <>
    <Helmet>
  <title>Deployment and Maintenance | KtisisLabs</title>
  <meta name="description" content="Seamless deployment and reliable maintenance services to keep your software running smoothly and efficiently." />
  <meta name="keywords" content="Deployment Services, Software Maintenance, Reliable Operations, Software Deployment" />
</Helmet>
      <div className="Deployment-Maintenance-Section w-screen h-screen overflow-y-auto">
        <Navbar />

        {/* Header Section */}
        <section className="w-screen h-96 flex items-center justify-center flex-col bg-white px-4 text-center">
          <p className="text-black font-poppins text-4xl md:text-5xl lg:text-6xl font-semibold">Deployment & Maintenance</p>
          <p className="text-black font-poppins font-medium my-5 text-sm md:text-base lg:text-lg">
            Streamline your deployment process and ensure consistent performance with our comprehensive deployment and maintenance services.
          </p>
        </section>

        {/* Deployment Description Section */}
        <section className="w-screen bg-black py-16 px-4 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10">Service Description</h2>
            <p className="text-white font-poppins text-sm md:text-base lg:text-lg mb-10 leading-relaxed">
              Our deployment services ensure your application transitions seamlessly from development to production. 
              We handle configuration, build optimization, and setup on various platforms, ensuring reliability and scalability.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={DeploymentImg}
                  alt="Deployment Services"
                  className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg"
                />
              </div>

              {/* Steps List */}
              <div className="w-full md:w-1/2">
                <ul className="space-y-5">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4">✓</span>
                    <span className="text-white font-poppins text-base md:text-lg">Production Build Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4">✓</span>
                    <span className="text-white font-poppins text-base md:text-lg">Hosting Configuration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4">✓</span>
                    <span className="text-white font-poppins text-base md:text-lg">Environment Variables Setup</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4">✓</span>
                    <span className="text-white font-poppins text-base md:text-lg">CI/CD Integration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4">✓</span>
                    <span className="text-white font-poppins text-base md:text-lg">Testing Before Deployment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="w-screen bg-white py-16 px-4 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-poppins font-semibold text-black mb-10">Benefits</h2>
            <ul className="text-black font-poppins text-sm md:text-base lg:text-lg space-y-5">
              <li><strong>Performance Monitoring:</strong> Track and optimize application performance.</li>
              <li><strong>Bug Fixing:</strong> Identify and resolve issues reported by users or monitoring tools.</li>
              <li><strong>Regular Updates:</strong> Keep dependencies and libraries up-to-date for optimal security and performance.</li>
              <li><strong>Scalability Improvements:</strong> Adjust resources to meet user demand.</li>
              <li><strong>Data Security:</strong> Implement regular security audits and updates.</li>
              <li><strong>User Feedback Integration:</strong> Continuously improve based on user suggestions.</li>
            </ul>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-screen h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          {/* Background Image */}
          <img
            src={DeploymentBG}
            alt="background-image"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />

          {/* Heading */}
          <h1 className="font-poppins font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Let’s deploy and maintain
            <span className="font-extrabold text-white"> together</span>
          </h1>

          {/* Subtext */}
          <p className="font-poppins text-white text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8">
            Partner with us for seamless deployment and reliable maintenance of your software.
          </p>

          {/* Button */}
          <Link to='/Contact'>  <button className="bg-white text-black font-medium rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition duration-300">
                  Get in Touch <span className="ml-2">•</span>
                </button></Link>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default DeploymentAndMaintenance;
