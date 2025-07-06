// src/components/PlacedStudents.jsx
import React from "react";
import { students } from "../data/students";

const PlacedStudents = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our Placed Students</h1>
        <p className="text-lg mt-2">
          Thousands of students selected in Tech Companies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white hover:scale-110 transition-all duration-300 text-black p-4 rounded-xl shadow-md text-center"
          >
            <img
              src={student.img}
              alt={student.name}
              className="rounded-full mx-auto mb-2 w-20 h-20 object-cover"
            />
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <img
              src={student.logo}
              alt={student.company}
              className="h-6 mx-auto my-2"
            />
            <p className="text-sm">{student.company}</p>
            <p className="text-sm text-gray-600">{student.role}</p>
            <p className="text-sm text-blue-600 mt-1">{student.track}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-900 text-2xl mt-6 flex justify-center border-l-2 items-center ">
        + many more
      </p>
    </div>
  );
};

export default PlacedStudents;
