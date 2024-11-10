import React from 'react';
import VideoBack from '../Assets/Background.mp4';
import Navbar from '../components/Navbar';
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { FaCode } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";
import '../Styles/Services.css' ; 


function Services() {
 
  return (
    <div className="Services-container relative bg-black w-full h-screen overflow-hidden">
      
            <Navbar />
      {/* Overlay content */}
      <div className="Services-Section absolute inset-0 bg-black bg-opacity-50">
  
        <div className=" Card-div flex  items-center justify-center h-full text-center text-white space-y-2 gap-12">
      
          <CardSpotlight>
            <ul className="flex flex-col items-center">
            <FaCode className='text-7xl text-white my-3' />
            <h2 className='text-white font-poppins font-semibold text-xl text-center'>Software Development</h2>
            <h3 className='p-5 text-white text-sm font-poppins font-light text-center'>Custom Software Solutions. We develop scalable, <br></br> high-performance software  tailored to your business needs,<br></br> using the latest technologies and industry best practices.</h3>
            <p className='text-white font-poppins text-sm my-4 font-light'>Fullstack Development</p>
            </ul>
          </CardSpotlight>
          <CardSpotlight>
            <ul className="flex flex-col items-center">
            <MdMonitor className='text-7xl text-white my-3' />
            <h2 className='text-white font-poppins font-semibold text-xl text-center'>Web Design & Development</h2>
            <h3 className='p-5 text-white text-sm font-poppins font-light text-center'>We craft beautiful, responsive websites tailored to your vision. <br/>Whether custom-coded or no-code, we ensure a fast, <br></br>secure, and scalable website.</h3>
            <p className='text-white font-poppins text-sm my-4 font-light'>Frontend Development</p>
            
            </ul>
          </CardSpotlight>
          <CardSpotlight>
            <ul className="flex flex-col items-center">
            <FaPencilRuler className='text-7xl text-white my-3' />
            <h2 className='text-white font-poppins font-semibold text-xl text-center'>UI/UX Design</h2>
            <h3 className='p-5 text-white text-sm font-poppins font-light text-center'>We create visually appealing and intuitive interfaces.<br/> We prioritize ease of use and seamless<br></br> interactions to make your digital products user-friendly.</h3>
            <p className='text-white font-poppins text-sm my-4 font-light'>Web Design / App Design / Product Design</p>
                         
            </ul>
          </CardSpotlight>
        </div>
      </div>
    </div>
  );
}

export default Services;
