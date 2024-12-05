import React from "react";

function Casestudy({ closeCaseStudy, data }) {
  if (!data) {
    return null; // Handle cases where no data is provided
  }

  return (
    <div className="Casestudy-Container fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="Casestudy-Content bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 text-left overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-4 text-black">{data.clientInfo.name} Case Study</h2>
        <p className="text-gray-600 mb-2 italic">{data.tagline}</p>
        <p className="text-gray-700 mb-6">{data.introduction}</p>

        {/* Challenges Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-black">Challenges</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {data.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        {/* Objectives Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-black">Objectives</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {data.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>

        {/* Process Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-black">Process</h3>
          <div className="text-gray-700">
            <p><strong>Research:</strong> {data.process.research}</p>
            <p><strong>Wireframing:</strong> {data.process.wireframing}</p>
            <p><strong>Design:</strong> {data.process.design}</p>
            <p><strong>Testing:</strong> {data.process.testing}</p>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-black">Solutions</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {data.solutions.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </div>

        {/* Results Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-black">Results</h3>
          <div className="text-gray-700">
            <p><strong>Engagement:</strong> {data.results.engagement}</p>
            <p><strong>Inquiries:</strong> {data.results.inquiries}</p>
            <p><strong>Feedback:</strong> {data.results.feedback}</p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-black">Key Features</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {data.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Visuals Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-black">Visuals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.visuals.map((visual, index) => (
              <div key={index} className="text-center">
                <img
                  src={visual.imageUrl}
                  alt={visual.description}
                  className="rounded-md border shadow-sm mb-2"
                />
                <p className="text-sm text-gray-600">{visual.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-black">Client Testimonial</h3>
          <blockquote className="text-gray-700 italic">
            "{data.clientTestimonial}"
          </blockquote>
        </div>

        {/* Call to Action */}
        <div className="mb-6 text-center">
          <a
            href={data.callToAction.viewProjectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 mr-4"
          >
            View Project
          </a>
       
        </div>

        {/* Close Button */}
        <div className="text-center">
          <button
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            onClick={closeCaseStudy}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Casestudy;
