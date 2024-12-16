import React, { useEffect } from "react";
import { useForm } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';
import Mainlogo from '../Assets/newLogo.png';
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

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
            <p className="text-gray-500">Drop your mail and reach out to us</p>
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
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Services</li>
              <li className="hover:underline cursor-pointer">Work</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[15%]">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Services</li>
              <li className="hover:underline cursor-pointer">Case Studies</li>
              <li className="hover:underline cursor-pointer">Get a Quote</li>
              <li className="hover:underline cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="flex flex-col gap-4 w-full sm:w-[45%] lg:w-[25%]">
            <div>
              <h3 className="text-lg font-semibold">Connect with us</h3>
              <p>connect.ktisislabs@gmail.com</p>
              <p>+91 9289183829</p>
              <p>+91 9205325227</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Follow us on</h3>
              <div className="flex gap-4 mt-2">
                <GrInstagram className="text-xl cursor-pointer hover:text-gray-600" />
                <FaLinkedinIn className="text-xl cursor-pointer hover:text-gray-600" />
                <BsTwitterX className="text-xl cursor-pointer hover:text-gray-600" />
                <SiGmail className="text-xl cursor-pointer hover:text-gray-600" />
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
