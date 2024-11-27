import React, { useEffect } from "react";
import { useForm } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';

function Footer() {
  const [state, handleSubmit] = useForm("xjkvavqa");

  useEffect(() => {
    console.log('Form succeeded state:', state.succeeded);
    if (state.succeeded) {
      toast.success('Thankyou for reaching out to us !', {
        duration: 4000,
        position: 'top-center',
      });
    }
  }, [state.succeeded]);

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className="w-full h-auto bg-black flex justify-center items-center mt-24 flex-col py-10 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-poppins text-white text-center">
            Welcome to KtisisLabs
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-gray-500 mt-4 text-center">
           Drop your mail and we will reach out to you
          </p>
          <input
            type="email" 
            className="w-full sm:w-[60vw] md:w-[40vw] lg:w-[30vw] border mt-7 p-3 rounded-xl bg-transparent text-white placeholder-gray-500 outline-none"
            placeholder="Enter Your Email"
            name="email" 
            required 
          />
          <button
            type="submit" 
            className="text-black bg-white mt-5 border px-6 py-3 sm:px-8 sm:py-4 lg:w-60 rounded-full font-poppins hover:text-white hover:bg-black transition duration-300"
          >
            Subscribe
          </button>
        </div>
      </form>
    </>
  );
}

export default Footer;
