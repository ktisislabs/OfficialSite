import React from 'react';
import Navbar from '../../components/Navbar';
import WebAppImg from '../../Assets/webapp.jpg';
import WebAppBG from '../../Assets/webappbg.jpg';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function WebApp() {
  return (
    <>
    <Helmet>
  <title>Web Application Development | KtisisLabs</title>
  <meta name="description" content="Expert web application development services tailored to your business needs. Build scalable, robust, and user-friendly applications." />
  <meta name="keywords" content="Web Development, Application Development, Scalable Web Solutions, Professional Web Apps" />
</Helmet>
      <div className='WebApp-Section w-screen h-screen overflow-y-auto'>
        <Navbar />

        {/* Header Section */}
        <section className='w-screen h-96 flex items-center justify-center flex-col bg-white px-4 text-center'>
          <p className='text-black font-poppins text-4xl md:text-5xl lg:text-6xl font-semibold'>Web Application Development</p>
          <p className='text-black font-poppins font-medium my-5 text-sm md:text-base lg:text-lg'>
            We specialize in crafting robust, scalable, and efficient web applications that empower your business and engage your users.
          </p>
        </section>

        {/* Service Description Section */}
        <section className='w-screen bg-black py-16 px-4 md:px-16'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Service Description</h2>

            <p className='text-white font-poppins text-sm md:text-base lg:text-lg mb-10 leading-relaxed'>
              Web application development is the process of building dynamic, interactive applications that run on web browsers. At the core of our services, we integrate robust front-end and back-end technologies to create seamless user experiences and efficient system operations. The front-end focuses on user interface and accessibility, ensuring visually appealing and intuitive design. Meanwhile, the back-end manages server-side processes, databases, and APIs to ensure smooth functionality and scalability. Together, these components empower businesses with powerful tools that are tailored to meet specific operational needs. From single-page applications (SPAs) to enterprise-grade systems, our solutions are optimized for performance, security, and reliability.
            </p>

            {/* Image and Process List Section */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
              {/* Image */}
              <div className='w-full md:w-1/2 flex justify-center'>
                <img 
                  src={WebAppImg} 
                  alt='Web Application Development' 
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
                    <span className='text-white font-poppins text-base md:text-lg'>UI/UX Design</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Front-End Development</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Back-End Development</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Testing & QA</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Deployment & Maintenance</span>
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
              <li><strong>Custom Solutions:</strong> We design applications tailored specifically to your business processes and objectives.</li>
              <li><strong>Enhanced User Engagement:</strong> Our intuitive front-end designs ensure a seamless and enjoyable user experience.</li>
              <li><strong>Scalability and Flexibility:</strong> Applications are built to grow alongside your business, ensuring future-proof solutions.</li>
              <li><strong>Robust Security:</strong> We implement state-of-the-art security measures to protect your data and ensure compliance.</li>
              <li><strong>Streamlined Integration:</strong> Easily integrate with existing tools, systems, and third-party APIs to enhance productivity.</li>
              <li><strong>End-to-End Support:</strong> From initial consultation to post-launch maintenance, we provide comprehensive assistance.</li>
              <li><strong>Optimized Performance:</strong> Our applications are built to deliver speed and reliability, ensuring satisfaction for your users.</li>
            </ul>
          </div>
        </section>

        {/* Final Call-to-Action Section */}
        <section className="w-screen h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          {/* Background Image */}
          <img
            src={WebAppBG}
            alt="background-image"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />

          {/* Heading */}
          <h1 className="font-poppins font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Let’s build <span className="font-extrabold text-white"></span> together
          </h1>

          {/* Subtext */}
          <p className="font-poppins text-white text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8">
            Transform your vision into reality with custom web application solutions that combine cutting-edge technology, user-focused design, and unmatched expertise.
          </p>

          {/* Button */}
      <Link to='/Contact'>   <button className="bg-white text-black font-medium rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition duration-300">
            Get in Touch <span className="ml-2">&bull;</span>
          </button></Link> 
        </section>
        <Footer />
      </div>
    </>
  );
}

export default WebApp;
