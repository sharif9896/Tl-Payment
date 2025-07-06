import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import CongratsPopup from "./CongratsPopup";
import { BACKEND_URL } from "../utils/utils";
import SplashScreen from "./SplashScreen";

const faqs = [
  {
    question: "Scan By QR Code",
    content: (
      <>
        <img
          src="ammi.jpeg"
          alt="ReactJS Example"
          className="w-full max-w-md mb-3 border rounded"
        />
        <a
          href="ammi.jpeg"
          download="react-example.png"
          className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
        >
          ⬇ Download Image
        </a>
      </>
    ),
  },
  {
    question: "Pay with Phone Number",
    content: <p>+91 9952247717</p>,
  },
  {
    question: "Pay with UPI ID",
    content: <p>raheelatl539@oksbi</p>,
  },
];

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    image: null,
  });

  const navigate = useNavigate();
  const [tru, settru] = useState(false);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [image, setimage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const [showPopup, setShowPopup] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    settru(true);
    if (showSplash) {
      return <SplashScreen />;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("image", image);
      const res = await axios.post(
        `${BACKEND_URL}/api/techlead/register`,
        formData
      );
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      console.log(res);
      settru(false);
      toast.success("Payment Successfully!");
      setShowPopup(true);
    } catch (err) {
      toast.error("Failed to register.");
    }
  };
  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  const handleCopy = (text) => {
    console.log(text);
  };

  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setimage(file);
    };
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-2"
          onChange={(e) => setname(e.target.value)}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2"
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2"
          onChange={(e) => setphone(e.target.value)}
          required
        />

        <div className="max-w-2xl mx-auto mt-5">
          <h2 className="text-m sm:text-xl font-bold mb-6 text-gray-700 text-center">
            Make Payment with UPI/Number/Qr Code
          </h2>
          <h4 className="flex justify-center items-center">
            ₹ 3500/- (One Time Payment) for 6 Months
          </h4>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border rounded-md shadow-sm">
                <div
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-6 py-4 font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition flex justify-between items-center"
                >
                  {item.question}
                </div>

                {activeIndex === index && (
                  <div className="px-6 py-4 bg-white text-gray-700 relative">
                    {item.content ? (
                      item.content
                    ) : (
                      <>
                        <div className="flex items-start justify-between">
                          <p
                            onClick={() => handleCopy(item.contentText)}
                            className="pr-10"
                          >
                            {item.contentText}
                          </p>
                        </div>
                        <div
                          onClick={() => handleCopy(item.contentText)}
                          className="ml-2 p-2 text-gray-500 hover:text-blue-600"
                          title="Copy to clipboard"
                        >
                          Copy
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <label
          htmlFor="Screen Short"
          for="ss"
          className="block text-gray-700 mt-4 text-sm font-medium"
        >
          Payment Screen Short
        </label>
        <input
          name="phone"
          type="file"
          id="ss"
          placeholder="Upload Payment Screen Short"
          className="w-full border p-2"
          onChange={changePhotoHandler}
          required
        />
        {/* <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white p-2"
        >
          {tru ? "Submitting wait..." : "Submit"}
        </button> */}
        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white p-2 flex justify-center items-center"
          disabled={loading}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: loading ? "#333" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {" "}
          {loading ? (
            <>
              <span className="spinner" />
              Loading...
            </>
          ) : (
            "Submit"
          )}
          <style>
            {`
            .spinner {
              width: 16px;
              height: 16px;
              border: 2px solid white;
              border-top: 2px solid transparent;
              border-radius: 50%;
              animation: spin 0.6s linear infinite;
            }

            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}
          </style>
        </button>
      </form>
      <CongratsPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        whatsappLink="https://chat.whatsapp.com/G9XRHJ7UQc44d0ayqiIaPM" // replace with real link
      />
    </>
  );
}

export default RegisterForm;
