import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Mainlogo from "../Assets/newLogo.png";
import { useForm } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const [state, handleSubmit] = useForm("xjkvavqa");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thank you for subscribing!", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#000",
          color: "#fff",
        },
      });
    }
  }, [state.succeeded]);

  return (
    <footer className="w-full bg-white text-black py-8">
      <Toaster />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16 justify-between">
          {/* Logo and Email Subscription */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-4">
            <img src={Mainlogo} alt="Ktisis Labs Logo" className="w-32" />
            <p className="text-gray-500 text-sm leading-relaxed">
              Subscribe to our latest updates and news
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="p-2 rounded-md border border-gray-300 bg-gray-100 text-sm placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-black text-white py-2 rounded-md text-sm hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Pages Links */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/Homepage" className="hover:underline">
                  HomePage
                </Link>
              </li>
              <li>
                <Link to="/About" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Work" className="hover:underline">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/Work" className="hover:underline">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:underline">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Connect with us</h3>
            <p className="text-sm">connect.ktisislabs@gmail.com</p>
            <p className="flex items-center gap-2 text-sm">
              <IoIosCall className="text-lg" /> +91 9289183829
            </p>
            <p className="flex items-center gap-2 text-sm">
              <IoIosCall className="text-lg" /> +91 9205325227
            </p>
            <h3 className="text-lg font-semibold mt-4">Follow us on</h3>
            <div className="flex gap-4">
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
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm">
        <p>© 2024 Ktisis Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
