import React, { useEffect, useState } from "react";
import RegisterForm from "./components/RegisterForm";
import DreamCompaniesGrid from "./components/DreamCompaniesGrid";
import PlacedStudents from "./components/PlacedStudents";
import Footer from "./components/Footer";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
