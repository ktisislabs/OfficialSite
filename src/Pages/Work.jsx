import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { WorkData } from "../Data/Work";
import { CaseStudyData } from "../Data/casestudy";
import Casestudy from "../components/Casestudy";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function Work() {
  const [openCaseStudy, setOpenCaseStudy] = useState(null);

  const openCasestudy = (caseStudyId) => {
    const caseStudy = CaseStudyData.find((item) => item.id === caseStudyId);
    setOpenCaseStudy(caseStudy);
  };

  const closeCasestudy = () => {
    setOpenCaseStudy(null);
  };

  return (
    <>
      <Helmet>
        <title>Our Work | Ktisis Labs</title>
        <meta
          name="description"
          content="Explore the portfolio of Ktisis Labs and see our amazing work."
        />
        <meta name="keywords" content="Portfolio, Projects, Ktisis Labs Work" />
      </Helmet>

      {/* Case Study Modal */}
      {openCaseStudy && (
        <Casestudy data={openCaseStudy} closeCaseStudy={closeCasestudy} />
      )}

      <div className="bg-black text-white w-full min-h-screen overflow-y-auto">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="px-6 md:px-12 lg:px-16 py-10">
          {/* Heading */}
          <h1 className="text-center text-3xl md:text-3xl font-regular mb-12 font-poppins">
            Check out our latest works and case studies
          </h1>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WorkData.map((item, index) => (
              <div
                key={index}
                className="bg-black  rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
              >
                {/* Card Header */}
                <div className="p-4">
                  <p className="text-sm text-gray-400 mb-2">{item.Service}</p>
                  <h2 className="text-xl font-semibold mb-2">{item.Name}</h2>
                  <p className="text-gray-400 text-sm">{item.Industry}</p>
                </div>

                {/* Card Image */}
                <div className="bg-gray-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Card Footer */}
                <div className="p-4 flex flex-col space-y-4">
                  <p className="text-gray-400 text-sm">{item.Description}</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-4 text-sm rounded-lg bg-white text-black font-medium hover:bg-gray-300"
                    >
                      View Project
                    </a>
                    <button
                      onClick={() => openCasestudy(item.caseStudyId)}
                      className="flex-1 text-center py-2 px-4 text-sm rounded-lg bg-white text-black font-medium hover:bg-gray-300"
                    >
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Work;
