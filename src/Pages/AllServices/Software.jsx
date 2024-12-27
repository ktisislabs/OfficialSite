import React from 'react';
import Navbar from '../../components/Navbar';
import SDE from '../../Assets/sde.jpg'
import SDEBG from '../../Assets/sdebg.jpg'
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Software() {
  return (
    <>
     <Helmet>
        <title>Custom Software Development | KtisisLabs</title>
        <meta name="description" content="Professional software development services tailored to your needs." />
        <meta name="keywords" content="Software Development, Custom Solutions, Professional Software" />
      </Helmet>
      <div className='Software-Section w-screen h-screen overflow-y-auto'>
        <Navbar />

        {/* Header Section */}
        <section className='w-screen h-96 flex items-center justify-center flex-col bg-white px-4 text-center'>
          <p className='text-black font-poppins text-4xl md:text-5xl lg:text-6xl font-semibold'>Custom Software Development</p>
          <p className='text-black font-poppins font-medium my-5 text-sm md:text-base lg:text-lg'>
            We specialize in building custom software solutions tailored to your business needs, ensuring scalability, efficiency, and long-term success.
          </p>
        </section>

        {/* Service Description Section */}
        <section className='w-screen bg-black py-16 px-4 md:px-16'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Service Description</h2>

            <p className='text-white font-poppins text-sm md:text-base lg:text-lg mb-10 leading-relaxed'>
              Custom software development is the process of creating tailored software applications or solutions designed to meet specific business needs, requirements, and objectives. Unlike off-the-shelf software, custom software is built from the ground up, considering unique workflows, processes, and goals of an organization. This approach ensures that the software aligns perfectly with the client’s operations and can be optimized for efficiency, scalability, and user experience. Custom software can address a wide range of purposes, from automating internal processes to creating customer-facing applications, and it is characterized by its adaptability, scalability, and the ability to evolve as business needs change. This tailored approach empowers organizations to achieve a competitive edge, streamline operations, and innovate in response to evolving market demands.
            </p>

            {/* Image and Process List Section */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
              {/* Image */}
              <div className='w-full md:w-1/2 flex justify-center'>
                <img 
                  src={SDE} 
                  alt='Service Description' 
                  className='w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg'
                />
              </div>

              {/* Process List */}
              <div className='w-full md:w-1/2'>
                <ul className='space-y-5'>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Requirements Gathering</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Design and Planning</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Development</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Testing</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Deployment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='w-screen bg-black py-16 px-4 md:px-16'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Benefits</h2>
            <ul className='text-white font-poppins text-sm md:text-base lg:text-lg space-y-5'>
              <li><strong>Exclusive Customization:</strong> At Ktisis Labs, we prioritize your business uniqueness, delivering solutions finely tuned to your vision and goals.</li>
              <li><strong>Accelerated Efficiency:</strong> Our tailored software accelerates processes with precision, streamlining operations to deliver measurable productivity gains.</li>
              <li><strong>Seamless Scalability:</strong> We build software with growth in mind, ensuring effortless scalability to match your business expansion.</li>
              <li><strong>Cost-Effective Innovation:</strong> With Ktisis Labs, upfront investments lead to substantial savings by integrating innovation and eliminating redundant tools.</li>
              <li><strong>Unmatched Competitive Edge:</strong> Leverage our solutions to outpace competitors, introducing groundbreaking functionalities that redefine your market positioning.</li>
              <li><strong>Robust Data Security:</strong> Our bespoke software safeguards your data with state-of-the-art protocols tailored to your compliance requirements.</li>
              <li><strong>Effortless Integration:</strong> We ensure flawless compatibility with your existing systems, minimizing disruptions and maximizing efficiency.</li>
              <li><strong>Comprehensive Support:</strong> Our dedicated team offers continual support and updates, ensuring your software remains agile and cutting-edge.</li>
              <li><strong>Full Ownership:</strong> Retain absolute control with full ownership of your custom software, ensuring freedom and flexibility in its evolution.</li>
            </ul>
          </div>
        </section>
        <section className="w-screen h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Background Image */}
                <img
                  src={SDEBG}
                  alt="background-image"
                  className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                />
        
                {/* Heading */}
                <h1 className="font-poppins font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                  Let’s build 
                  <span className="font-extrabold text-white"> together</span>
                </h1>
        
                {/* Subtext */}
                <p className="font-poppins text-gray-300 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8">
            
Take the first step towards a smarter future and transform your business with custom software solutions, tailored technologies, expert development, and dedicated support.
                </p>
        
                {/* Button */}
              <Link to='/Contact'>  <button className="bg-white text-black font-medium rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition duration-300">
                  Get in Touch <span className="ml-2">•</span>
                </button></Link>
              </section>
              <Footer/>
      </div>
    </>
  );
}

export default Software;
