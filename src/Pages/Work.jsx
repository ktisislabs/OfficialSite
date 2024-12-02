import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { WorkData } from "../Data/Work";
import Casestudy from "../components/Casestudy";

function Work() {
  const [openCaseStudy, setOpenCaseStudy] = useState(null);

  const openCasestudy = (casestudydata) => {
    setOpenCaseStudy(casestudydata);
  };

  const closeCasestudy=()=>{
    setOpenCaseStudy(null)
  }

  const renderCasestudy = () => {
    if (openCaseStudy) {
      return <Casestudy data={openCaseStudy} closeCaseStudy={closeCasestudy} />;
    }
    return null;
  };

  return (
    <>
    {renderCasestudy()}
    <div className="Work-Container overflow-auto w-full h-screen bg-black text-white fixed">
      {/* Navbar */}
      <Navbar />

      {/* Case Study Overlay */}
      

      {/* Main Content */}
      <div className="Work-grid-container w-full min-h-screen flex flex-col items-center px-6 md:px-16 pt-16">
        <h1 className="text-2xl md:text-5xl sm:text-lg lg:text-xl font-medium mb-8 text-center font-poppins">
          Check out our latest works and case studies
        </h1>

        {/* Grid Layout for Work Cards */}
        <div className="Card-grid-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
          {WorkData.map((item, index) => (
            <div
              key={index}
              className="Work-card bg-black shadow-sm shadow-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <p className="text-sm text-gray-400 mb-4 p-2">{item.Service}</p>
              {/* Image */}
              <div className="Work-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-contain"
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{item.Name}</h2>

                <p className="text-sm text-gray-400 mb-4">({item.Industry})</p>
                <p className="text-sm text-gray-400 mb-4">{item.Description}</p>

                <div className="flex items-center justify-around">
                  <span className="text-sm text-gray-500">{item.category}</span>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-500 ml-12 border p-2 text-sm rounded-full bg-white text-black font-medium"
                  >
                    View Project
                  </a>
                  <button
                    className="hover:text-gray-500 border p-2 text-sm rounded-full bg-white text-black font-medium"
                    onClick={()=>openCasestudy(item)}
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Work;
