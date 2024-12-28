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
      toast.success('Thank you for subscribing!', {
        duration: 4000,
        position: 'top-center',
      });
    }
  }, [state.succeeded]);

  return (
    <>
      <Toaster />
      <footer className="Footer-Section w-full bg-white text-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap gap-8 justify-between">
          {/* Logo and Email Section */}
          <div className="Footer-1 flex flex-col gap-4 w-full sm:w-1/2 lg:w-1/4">
            <img src={Mainlogo} alt="Logo" className="w-40 mx-auto sm:mx-0" />
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Subscribe to our latest updates and news
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-2 rounded-md border border-gray-300 bg-gray-100 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md text-sm hover:bg-gray-800 transition focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Pages Section */}
          <div className="flex flex-col gap-4 w-full sm:w-1/2 lg:w-1/6">
            <h3 className="text-lg font-semibold text-center sm:text-left">Pages</h3>
            <ul className="space-y-2 text-sm text-center sm:text-left">
              <Link to="/Homepage">
                <li className="hover:underline cursor-pointer">HomePage</li>
              </Link>
              <Link to="/About">
                <li className="hover:underline cursor-pointer">About Us</li>
              </Link>
              <Link to="/Services">
                <li className="hover:underline cursor-pointer">Services</li>
              </Link>
              <Link to="/Work">
                <li className="hover:underline cursor-pointer">Work</li>
              </Link>
              <Link to="/Contact">
                <li className="hover:underline cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col gap-4 w-full sm:w-1/2 lg:w-1/6">
            <h3 className="text-lg font-semibold text-center sm:text-left">Resources</h3>
            <ul className="space-y-2 text-sm text-center sm:text-left">
              <Link to="/Work">
                <li className="hover:underline cursor-pointer">Case Studies</li>
              </Link>
              <Link to="/Contact">
                <li className="hover:underline cursor-pointer">Get a Quote</li>
              </Link>
              <Link to="/Contact">
                <li className="hover:underline cursor-pointer">FAQ</li>
              </Link>
            </ul>
          </div>

          {/* Address Section */}
          <div className="flex flex-col gap-4 w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-semibold text-center sm:text-left">Connect with us</h3>
            <p className="text-center sm:text-left text-sm">
              connect.ktisislabs@gmail.com
            </p>
            <p className="flex items-center gap-2 justify-center sm:justify-start text-sm">
              <IoIosCall className="text-lg" /> +91 9289183829
            </p>
            <p className="flex items-center gap-2 justify-center sm:justify-start text-sm">
              <IoIosCall className="text-lg" /> +91 9205325227
            </p>
            <h3 className="text-lg font-semibold mt-4 text-center sm:text-left">
              Follow us on
            </h3>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/ktisislabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-600"
              >
                <GrInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/ktisis-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-600"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/KtisisL24135"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-600"
              >
                <BsTwitterX />
              </a>
              <a
                href="mailto:connect.ktisislabs@gmail.com"
                className="text-lg hover:text-gray-600"
              >
                <SiGmail />
              </a>
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
