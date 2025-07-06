// src/components/CongratsPopup.jsx
import React from "react";
import { CheckCircle, X } from "lucide-react";
import { Link } from "react-router-dom";

const CongratsPopup = ({ show, onClose, number, whatsappLink }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-blue-600  bg-opacity-20  flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 cursor-pointer hover:text-red-500"
        >
          <X size={20} />
        </button>

        <CheckCircle className="text-green-500 w-14 h-14 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
        <p className="text-gray-700 mb-6">
          Payment has done Successfully. Now you can recieve the notes very soon,
          Just accept to recieve your invoice.
        </p>

        <Link
          to={`/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block cursor-pointer px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Accept
        </Link>
      </div>
    </div>
  );
};

export default CongratsPopup;
