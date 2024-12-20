import React from 'react';
import Navbar from '../../components/Navbar';
import MobileAppImg from '../../Assets/mobileapp.jpg';
import MobileAppBG from '../../Assets/mobileappbg.jpg';
import Footer from '../../components/Footer';

function MobileApp() {
  return (
    <>
      <div className='MobileApp-Section w-screen h-screen overflow-y-auto'>
        <Navbar />

        {/* Header Section */}
        <section className='w-screen h-96 flex items-center justify-center flex-col bg-white px-4 text-center'>
          <p className='text-black font-poppins text-4xl md:text-5xl lg:text-6xl font-semibold'>Mobile Application Development</p>
          <p className='text-black font-poppins font-medium my-5 text-sm md:text-base lg:text-lg'>
            We craft high-performance, user-friendly mobile applications tailored to elevate your business and enhance user experiences.
          </p>
        </section>

        {/* Service Description Section */}
        <section className='w-screen bg-black py-16 px-4 md:px-16'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Service Description</h2>

            <p className='text-white font-poppins text-sm md:text-base lg:text-lg mb-10 leading-relaxed'>
              Mobile application development involves designing and building customized mobile solutions that cater to specific business needs and user expectations. Whether you require iOS, Android, or cross-platform apps, our expertise ensures seamless functionality, outstanding performance, and intuitive designs. From conceptualization to deployment, our process is focused on delivering scalable, secure, and innovative mobile apps that drive user engagement and business growth. We leverage the latest technologies and frameworks to create applications that align with your brand and deliver exceptional value to your users.
            </p>

            {/* Image and Process List Section */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
              {/* Image */}
              <div className='w-full md:w-1/2 flex justify-center'>
                <img 
                  src={MobileAppImg} 
                  alt='Mobile Application Development' 
                  className='w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg'
                />
              </div>

              {/* Process List */}
              <div className='w-full md:w-1/2'>
                <ul className='space-y-5'>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Requirement Analysis</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>UI/UX Design</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>App Development</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Quality Assurance</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>App Launch and Support</span>
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
              <li><strong>Enhanced User Engagement:</strong> Our mobile apps are designed to captivate users, ensuring a seamless and enjoyable experience.</li>
              <li><strong>Scalable Solutions:</strong> We develop apps that grow with your business, accommodating increasing user demands effortlessly.</li>
              <li><strong>Platform Compatibility:</strong> Whether iOS, Android, or cross-platform, our solutions ensure maximum reach and performance.</li>
              <li><strong>Advanced Security:</strong> Protect your user data and app integrity with robust security measures tailored to your requirements.</li>
              <li><strong>Improved Efficiency:</strong> Streamline operations and enhance productivity with apps optimized for your business workflows.</li>
              <li><strong>Custom Branding:</strong> Showcase your unique identity with applications that align with your brand aesthetics and messaging.</li>
              <li><strong>Ongoing Support:</strong> Receive continuous updates and maintenance to ensure your app remains cutting-edge and reliable.</li>
              <li><strong>Competitive Advantage:</strong> Stand out in the market with innovative features and functionality that cater to your audience.</li>
            </ul>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-screen h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          {/* Background Image */}
          <img
            src={MobileAppBG}
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
            Transform your business with mobile applications that drive innovation, enhance user experiences, and deliver measurable results.
          </p>

          {/* Button */}
          <button className="bg-white text-black font-medium rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition duration-300">
            Get in Touch <span className="ml-2">&bull;</span>
          </button>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MobileApp;
