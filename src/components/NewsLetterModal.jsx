import React,{useEffect} from "react";
import { TiNews } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useForm } from '@formspree/react';
import toast from 'react-hot-toast';
function NewsLetterModal({ handleClose }) {
    const [state, handleSubmit] = useForm("xdkkepal");


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
      <div className="w-[90%] md:w-[40%] bg-white border border-gray-300 shadow-xl absolute z-50 flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg">
        {/* Close Button */}

        <IoClose
          size={25}
          onClick={handleClose}
          className="absolute top-4 right-4 text-black hover:text-gray-700 cursor-pointer"
        />

        {/* Content */}
        <div className="flex flex-col items-center justify-center w-full h-auto space-y-6">
          {/* Icon and Heading */}
          <div className="flex flex-col items-center space-y-2">
            <TiNews className="text-5xl md:text-9xl text-black" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
              Subscribe to Our Newsletter
            </h1>
            <p className="text-sm md:text-base text-gray-600 text-center">
              Stay updated with the latest news, exclusive offers, and insights
              directly to your inbox.
            </p>
          </div>

          {/* Form Section */}
          <form className="flex flex-col items-center w-full space-y-4" onSubmit={handleSubmit}>
            {/* Input for Email */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full md:w-[80%] p-3 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-[80%] p-3 bg-black text-white font-semibold rounded-md hover:bg-white hover:text-black hover:border hover:border-black transition"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewsLetterModal;
