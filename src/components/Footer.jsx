import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full h-auto bg-black flex justify-center items-center mt-24 flex-col py-10 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-poppins text-white text-center">
          Welcome to KtisisLabs
        </h1>
        <p className="text-sm sm:text-base lg:text-xl text-gray-500 mt-4 text-center">
          Reach out to us for collaboration
        </p>
        <input
          className="w-full sm:w-[60vw] md:w-[40vw] lg:w-[30vw] border mt-7 p-3 rounded-xl bg-transparent text-white placeholder-gray-500 outline-none"
          placeholder="Enter Your Email"
        />
        <button className="text-black bg-white mt-5 border px-6 py-3 sm:px-8 sm:py-4 lg:w-60 rounded-full font-poppins hover:text-white hover:bg-black transition duration-300">
          Subscribe
        </button>
      </div>
    </>
  );
}

export default Footer;
