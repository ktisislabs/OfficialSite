import React from 'react';
import VideoBack from '../Assets/Background.mp4';
import Navbar from '../components/Navbar';
import { CardSpotlight } from "../components/ui/card-spotlight.jsx";
import { FaCode } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";
import '../Styles/Services.css' ; 
import Footer from '../components/Footer'

function Services() {
 
  return (
    <>
    <div className="Services-container relative bg-black w-full h-screen overflow-hidden">
      
            <Navbar />
      



            
    </div>
    <Footer/>
    </>
  );
}

export default Services;
