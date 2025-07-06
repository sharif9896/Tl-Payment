import React from "react";
import companyLogos from "../assets";

const DreamCompaniesGrid = () => {
  return (
    <div className="py-12 px-4 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Thousands of students achieved their{" "}
        <span className="text-blue-600 font-bold">dream job</span> at
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
        {companyLogos.map((company, index) => (
          <div key={index} className="flex items-center justify-center p-2">
            <img
              src={company.logo}
              alt={company.name}
              className="h-12 object-contain transition-all duration-300"
            />
          </div>
        ))}
      </div>

      <p className="text-gray-500 text-sm mt-6">+ many more</p>
    </div>
  );
};

export default DreamCompaniesGrid;
