import React, { useState } from "react";
import Logo from "../Assets/Logo2.png";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import "../Styles/Navbar.css";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";



function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  const renderMenu = () => {
    return (
      <div className={`Menu-Overlay ${menu ? "active" : ""}`} onClick={handleMenuToggle}>
        <div className={`Menu-Slide ${menu ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
        {/* e.stopPropagation() is used on the sliding menu (Menu-Slide) so that clicking inside the menu doesn’t trigger the 
        onClick event on the overlay (Menu-Overlay). Without e.stopPropagation(), 
        clicking inside the menu would also trigger the overlay's onClick, which is set to close the menu. */}
        <Link to='/'><img src={Logo} alt="Ham-Logo" className="Ham-Logo"></img></Link>
          <ul className="Menu-Items">
         
          <Link to='/Homepage'>    <li className="Menu-Item">Home</li> </Link>
          <Link to='/About'>    <li className="Menu-Item">About</li> </Link>
          <Link to='/Services'> <li className="Menu-Item">Services</li> </Link>
           <Link to='/Work'> <li className="Menu-Item">Work</li></Link>
         <Link to='/Contact'>   <li className="Menu-Item">Get a Quote</li></Link>
          </ul>

          {/* <div className="Icons-drawer flex flex-wrap justify-center items-center gap-5 text-white mt-36 mr-16">
            <a href='https://www.instagram.com/ktisislabs/' target='blank_' className="flex flex-col items-center hover:text-yellow-500 transition-all">
              <GrInstagram className='w-5 h-5 sm:w-8 sm:h-8' />
            </a>
            <a href='https://www.linkedin.com/company/ktisis-labs' target='blank_' className="flex flex-col items-center hover:text-blue-500 transition-all">
              <FaLinkedinIn className='w-6 h-6 sm:w-8 sm:h-8' />
            </a>
            <a href='https://x.com/KtisisL24135' target='blank_' className="flex flex-col items-center hover:text-gray-500 transition-all">
              <BsTwitterX className='w-6 h-6 sm:w-8 sm:h-8' />
            </a>
            <a href='mailto:connect.ktisislabs@gmail.com' target='_blank' className="flex flex-col items-center hover:text-red-500 transition-all">
              <SiGmail className='w-6 h-6 sm:w-8 sm:h-8' />
            </a>
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className="Navbar-Container flex items-center justify-between z-30 relative">
        <Link to="/">
          <div className="Image-Div ml-5 cursor-pointer">
            <img src={Logo} alt="Navbar-image" className="Nav-Logo w-56" />
          </div>
        </Link>
        <ul className="Navigation-ul text-white flex items-center gap-8 text-xl mr-5 font-poppins">
        <Link to='/Homepage'>  <li className="hover:text-gray-400 font-medium cursor-pointer">Home.</li></Link>
        <Link to='/About'>  <li className="hover:text-gray-400 font-medium cursor-pointer">About.</li></Link>
       <Link to='/Services'> <li className="hover:text-gray-400 font-medium cursor-pointer">Services.</li></Link>  
        <Link to='/Work'><li className="hover:text-gray-400 font-medium cursor-pointer">Work.</li></Link>  
       <Link to='/Contact'> <li className="hover:text-gray-400 font-medium cursor-pointer">Get a Quote.</li></Link>  
        </ul>
        <div className="Hamburger-div">
          <TiThMenu className="text-white text-3xl cursor-pointer" onClick={handleMenuToggle} />
        </div>
        {renderMenu()}
      </nav>
    </>
  );
}

export default Navbar;
