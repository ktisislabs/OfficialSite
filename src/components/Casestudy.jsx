import React from "react";

function Casestudy({ closeCaseStudy, data }) {
  if (!data) {
    return null; // Handle cases where no data is provided
  }

  return (
    <div className="Casestudy-Container fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="Casestudy-Content bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">{data.Name} Case Study</h2>
        <p className="text-gray-700 mb-6">
          {data.Description || "This is the case study content. You can customize this text to include more details."}
        </p>
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          onClick={closeCaseStudy}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Casestudy;
