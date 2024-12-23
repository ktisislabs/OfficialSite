import React, { useEffect } from "react";
import { useForm } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';
import Mainlogo from '../Assets/newLogo.png';
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  const [state, handleSubmit] = useForm("xjkvavqa");

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Thank you for reaching out to us!', {
        duration: 4000,
        position: 'top-center',
      });
    }
  }, [state.succeeded]);

  return (
    <>
      <Toaster />
      <footer className="Footer-Section w-screen overflow-hidden bg-white text-black py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-12 justify-between">
          {/* Logo and Email Section */}
          <div className="Footer-1 flex flex-col gap-4 w-full sm:w-[45%] lg:w-[25%]">
            <img src={Mainlogo} alt="Logo" className="w-60 mx-auto sm:mx-0" />
            <p className="text-gray-500">Subscribe to our latest updates and news</p>
            <div className="relative">
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-3 rounded-md border border-gray-300 bg-gray-100 text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Pages Section */}
          <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[15%]">
            <h3 className="text-lg font-semibold">Pages</h3>
            <ul className="space-y-2">
            <Link to='/Homepage'>  <li className="hover:underline cursor-pointer my-1">HomePage</li></Link>
            <Link to='/About'>  <li className="hover:underline cursor-pointer my-1">About Us</li></Link>
            <Link to='/Services'><li className="hover:underline cursor-pointer my-1">Services</li></Link>
            <Link to='/Work'>  <li className="hover:underline cursor-pointer my-1">Work</li></Link>
            <Link to='/Contact'> <li className="hover:underline cursor-pointer my-1">Contact</li></Link>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[15%]">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
            <Link to='/Work'>  <li className="hover:underline cursor-pointer my-1">Case Studies</li></Link> 
            <Link to='/Contact'> <li className="hover:underline cursor-pointer">Get a Quote</li> </Link>
            <Link to='/Contact'>  <li className="hover:underline cursor-pointer">FAQ</li> </Link>
            </ul>
          </div>

          {/* Address Section */}
          <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[25%]">
            <div>
              <h3 className="text-lg font-semibold my-1">Connect with us</h3>
              <p className="">connect.ktisislabs@gmail.com</p>
              <p className="flex items-center gap-2">   <IoIosCall className="text-xl cursor-pointer hover:text-gray-600" />+91 9289183829</p>
              <p className="flex items-center gap-2">   <IoIosCall className="text-xl cursor-pointer hover:text-gray-600" />+91 9205325227</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Follow us on</h3>
              <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/ktisislabs/" target="_blank"> <GrInstagram className="text-xl cursor-pointer hover:text-gray-600" /></a>
              <a href="https://www.linkedin.com/company/ktisis-labs" target="_blank">  <FaLinkedinIn className="text-xl cursor-pointer hover:text-gray-600" /></a>
              <a href="https://x.com/KtisisL24135" target="_blank">  <BsTwitterX className="text-xl cursor-pointer hover:text-gray-600" /></a>
              <a href="mailto:connect.ktisislabs@gmail.com">  <SiGmail className="text-xl cursor-pointer hover:text-gray-600" /></a>
             
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm">
          <p>© 2024 Ktisis Labs. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
