import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Tech Lead Academy.@ All rights
        reserved. <br />
      </p>
    </footer>
  );
}

export default Footer;
