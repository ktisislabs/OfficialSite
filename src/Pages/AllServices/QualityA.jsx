import React from 'react';
import Navbar from '../../components/Navbar';
import QualityImg from '../../Assets/quality.jpg';
import QualityBG from '../../Assets/qualitybg.jpg';
import Footer from '../../components/Footer';

function QualityA() {
  return (
    <>
      <div className='QualityAssurance-Section w-screen h-screen overflow-y-auto'>
        <Navbar />

        {/* Header Section */}
        <section className='w-screen h-96 flex items-center justify-center flex-col bg-white px-4 text-center'>
          <p className='text-black font-poppins text-4xl md:text-5xl lg:text-6xl font-semibold'>Quality Assurance & Software Testing</p>
          <p className='text-black font-poppins font-medium my-5 text-sm md:text-base lg:text-lg'>
            Ensure your software meets the highest standards of quality, reliability, and performance with our comprehensive QA and testing services.
          </p>
        </section>

        {/* Service Description Section */}
        <section className='w-screen bg-black py-16 px-4 md:px-16'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Service Description</h2>
            <p className='text-white font-poppins text-sm md:text-base lg:text-lg mb-10 leading-relaxed'>
              Our Quality Assurance and Software Testing services are designed to ensure that your software meets the highest standards of functionality, performance, and security. 
              We employ a combination of manual and automated testing techniques to identify and resolve issues at every stage of development. 
              From functional testing to performance analysis and security audits, our team is committed to delivering software that performs flawlessly in real-world scenarios.
            </p>

            {/* Image and Process List Section */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
              {/* Image */}
              <div className='w-full md:w-1/2 flex justify-center'>
                <img 
                  src={QualityImg} 
                  alt='Quality Assurance and Testing' 
                  className='w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg'
                />
              </div>

              {/* Process List */}
              <div className='w-full md:w-1/2'>
                <ul className='space-y-5'>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Requirement Analysis</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Test Planning</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Manual and Automated Testing</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Bug Reporting and Tracking</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Final Quality Assessment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Testing Section */}
        <section className='w-screen bg-white py-16 px-4 md:px-16'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-black mb-10'>Types of Testing</h2>
            <ul className='text-black font-poppins text-sm md:text-base lg:text-lg space-y-5'>
              <li><strong>Unit Testing:</strong> Focuses on testing individual components or modules for functionality.</li>
              <li><strong>Integration Testing:</strong> Ensures different modules or services work together as intended.</li>
              <li><strong>System Testing:</strong> Validates the complete and integrated system to verify it meets the requirements.</li>
              <li><strong>Acceptance Testing:</strong> Conducted to determine whether the system meets the user's needs and requirements.</li>
              <li><strong>Regression Testing:</strong> Ensures that new code changes do not adversely affect the existing functionality.</li>
              <li><strong>Performance Testing:</strong> Evaluates the system's performance under load and stress conditions.</li>
              <li><strong>Alpha Testing:</strong> Performed by internal teams to identify bugs before releasing to a broader audience.</li>
              <li><strong>Beta Testing:</strong> Conducted by a limited group of external users to gather feedback before the final release.</li>
              <li><strong>A/B Testing:</strong> Compares two versions of a system or component to determine which performs better.</li>
              <li><strong>Security Testing:</strong> Identifies vulnerabilities and ensures the system's data and resources are secure.</li>
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='w-screen bg-black py-16 px-4 md:px-16'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Benefits</h2>
            <ul className='text-white font-poppins text-sm md:text-base lg:text-lg space-y-5'>
              <li><strong>Improved Reliability:</strong> Detect and fix issues before they reach your users.</li>
              <li><strong>Enhanced Performance:</strong> Ensure your software operates efficiently under all conditions.</li>
              <li><strong>Data Security:</strong> Protect sensitive information with robust security testing.</li>
              <li><strong>Cost Savings:</strong> Identify defects early, reducing development costs and delays.</li>
              <li><strong>User Satisfaction:</strong> Deliver a flawless experience, ensuring user retention and loyalty.</li>
              <li><strong>Compliance:</strong> Ensure your software meets industry standards and regulations.</li>
              <li><strong>Continuous Improvement:</strong> Leverage feedback to enhance quality over time.</li>
            </ul>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-screen h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          {/* Background Image */}
          <img
            src={QualityBG}
            alt="background-image"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />

          {/* Heading */}
          <h1 className="font-poppins font-bold text-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Let’s ensure quality
            <span className="font-extrabold text-black"> together</span>
          </h1>

          {/* Subtext */}
          <p className="font-poppins text-gray-900 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8">
            Partner with us to deliver software that exceeds expectations and stands out in the market.
          </p>

          {/* Button */}
          <button className="bg-white text-black font-medium rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition duration-300">
            Get Started <span className="ml-2">&bull;</span>
          </button>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default QualityA;
