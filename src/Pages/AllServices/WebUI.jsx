import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WebDesignImg from '../../Assets/webdesign.jpg';
import WebDesignBG from '../../Assets/webdesignbg.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function WebDesign() {
  return (
    <>
    <Helmet>
  <title>Web and UI/UX Design | KtisisLabs</title>
  <meta name="description" content="Crafting intuitive and visually stunning web and UI/UX designs for businesses. Enhance your user experience with cutting-edge designs." />
  <meta name="keywords" content="UI/UX Design, Web Design, User Experience, Intuitive Interfaces, Visual Design" />
</Helmet>
      <div className='WebDesign-Section w-screen h-screen overflow-y-auto'>
        <Navbar />

        {/* Header Section */}
        <section className='w-screen h-96 flex items-center justify-center flex-col bg-white px-4 text-center'>
          <p className='text-black font-poppins text-4xl md:text-5xl lg:text-6xl font-semibold'>UI/UX Design and Web Design</p>
          <p className='text-black font-poppins font-medium my-5 text-sm md:text-base lg:text-lg'>
          Crafting visually stunning, user-friendly, and responsive UI/UX and web designs that captivate and engage your audience.
          </p>
        </section>

        {/* Service Description Section */}
        <section className='w-screen bg-black py-16 px-4 md:px-16'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Service Description</h2>

            <p className='text-white font-poppins text-sm md:text-base lg:text-lg mb-10 leading-relaxed'>
            UI/UX and web design combine the art and science of crafting visually appealing, functional, and responsive digital experiences. We focus on intuitive user flows, user-centered navigation, and stunning aesthetics to ensure seamless interactions across all devices. From selecting the perfect design elements to creating layouts that reflect your brand identity, we tailor our solutions to captivate your audience and elevate your digital presence. Whether it’s a website, app, or platform, we deliver designs that inspire, engage, and drive results
            </p>

            {/* Image and Process List Section */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
              {/* Image */}
              <div className='w-full md:w-1/2 flex justify-center'>
                <img 
                  src={WebDesignImg} 
                  alt='Web Design' 
                  className='w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg'
                />
              </div>

              {/* Process List */}
              <div className='w-full md:w-1/2'>
                <ul className='space-y-5'>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Research & Planning</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Wireframing</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Visual Design</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Prototyping</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
                    <span className='text-white font-poppins text-base md:text-lg'>Responsive Implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      {/* Benefits Section */}
{/* Benefits Section */}
<section className='w-screen bg-black py-16 px-4 md:px-16'>
  <div className='max-w-6xl mx-auto text-center'>
    <h2 className='text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Benefits</h2>
    <ul className='text-white font-poppins text-sm md:text-base lg:text-lg space-y-5 text-left md:text-left'>
      <li><strong>Brand Identity:</strong> Build a cohesive and unique identity with tailored UI/UX and web designs.</li>
      <li><strong>User Engagement:</strong> Enhance interaction with intuitive, user-centered interfaces.</li>
      <li><strong>Responsive Design:</strong> Deliver seamless experiences across all devices and screen sizes.</li>
      <li><strong>Optimized Performance:</strong> Combine aesthetics with functionality for faster and effective user journeys.</li>
      <li><strong>Professional Appeal:</strong> Create visually striking, modern designs that leave a lasting impression.</li>
    </ul>
  </div>
</section>



        {/* Final Call-to-Action Section */}
        <section className="w-screen h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          <img
            src={WebDesignBG}
            alt="background-image"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
          <h1 className="font-poppins font-bold text-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Design <span className="font-extrabold text-black">that inspires</span>
          </h1>
          <p className="font-poppins text-gray-800 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8">
            Let us transform your vision into captivating designs that resonate with your audience.
          </p>
          <Link to='/Contact'>  <button className="bg-white text-black font-medium rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition duration-300">
                  Get in Touch <span className="ml-2">•</span>
                </button></Link>
        </section>
        <Footer />
      </div>
    </>
  );
}

// function UIUXDesign() {
//   return (
//     <>
//       <div className='UIUXDesign-Section w-screen h-screen overflow-y-auto'>
//         <Navbar />

//         {/* Header Section */}
//         <section className='w-screen h-96 flex items-center justify-center flex-col bg-white px-4 text-center'>
//           <p className='text-black font-poppins text-4xl md:text-5xl lg:text-6xl font-semibold'>UI/UX Design</p>
//           <p className='text-black font-poppins font-medium my-5 text-sm md:text-base lg:text-lg'>
//             We create intuitive and aesthetically pleasing interfaces that enhance user satisfaction and engagement.
//           </p>
//         </section>

//         {/* Service Description Section */}
//         <section className='w-screen bg-black py-16 px-4 md:px-16'>
//           <div className='max-w-6xl mx-auto'>
//             <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Service Description</h2>

//             <p className='text-white font-poppins text-sm md:text-base lg:text-lg mb-10 leading-relaxed'>
//               UI/UX design involves understanding user behavior to create interfaces that are both functional and visually appealing. Our process combines research, design thinking, and innovative tools to deliver user experiences that drive engagement and loyalty. From wireframes to prototypes, we ensure every interaction is purposeful and delightful, paving the way for a seamless digital journey.
//             </p>

//             {/* Image and Process List Section */}
//             <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
//               {/* Image */}
//               <div className='w-full md:w-1/2 flex justify-center'>
//                 <img 
//                   src={UIUXImg} 
//                   alt='UI/UX Design' 
//                   className='w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg'
//                 />
//               </div>

//               {/* Process List */}
//               <div className='w-full md:w-1/2'>
//                 <ul space-y-5'>
//                   <li className='flex items-center'>
//                     <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
//                     <span className='text-white font-poppins text-base md:text-lg'>User Research</span>
//                   </li>
//                   <li className='flex items-center'>
//                     <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
//                     <span className='text-white font-poppins text-base md:text-lg'>Wireframe Development</span>
//                   </li>
//                   <li className='flex items-center'>
//                     <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
//                     <span className='text-white font-poppins text-base md:text-lg'>Interactive Prototyping</span>
//                   </li>
//                   <li className='flex items-center'>
//                     <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
//                     <span className='text-white font-poppins text-base md:text-lg'>Visual Design</span>
//                   </li>
//                   <li className='flex items-center'>
//                     <span className='w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded-full mr-4'>✓</span>
//                     <span className='text-white font-poppins text-base md:text-lg'>Usability Testing</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section className='w-screen bg-black py-16 px-4 md:px-16'>
//           <div className='max-w-6xl mx-auto'>
//             <h2 className='text-center text-3xl md:text-4xl font-poppins font-semibold text-white mb-10'>Benefits</h2>
//             <ul className='text-white font-poppins text-sm md:text-base lg:text-lg space-y-5'>
//               <li><strong>Enhanced Usability:</strong> Simplify user interactions with intuitive designs.</li>
//               <li><strong>Increased Engagement:</strong> Keep users interested with visually captivating interfaces.</li>
//               <li><strong>Better Conversion Rates:</strong> Design experiences that drive actions and sales.</li>
//               <li><strong>Stronger Brand Identity:</strong> Create consistent designs that reflect your brand's values.</li>
//               <li><strong>Improved Accessibility:</strong> Ensure your designs cater to a diverse audience.</li>
//             </ul>
//           </div>
//         </section>

//         {/* Final Call-to-Action Section */}
//         <section className="w-screen h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
//           <img
//             src={UIUXBG}
//             alt="background-image"
//             className="absolute top-0 left-0 w-full h-full object-cover -z-10"
//           />
//           <h1 className="font-poppins font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
//             Crafting <span className="font-extrabold text-white">Experiences</span>
//           </h1>
//           <p className="font-poppins text-gray-300 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-8">
//             Partner with us to design intuitive, user-focused interfaces that drive engagement and satisfaction.
//           </p>
//           <button className="bg-white text-black font-medium rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition duration-300">
//             Get in Touch <span className="ml-2">&bull;</span>
//           </button>
//         </section>
//         <Footer />
//       </div>
//     </>
//   );
// }

export default WebDesign

