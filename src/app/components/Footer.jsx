import React from "react";

const Footer = ({ theme }) => {
  return (
    <footer
      className={`footer border-t z-10 text-center py-6 ${
        theme === "dark"
          ? "border-t-[#33353F] text-white"
          : "border-t-gray-200 text-black"
      }`}
    >
      <p
        className={`text-sm ${
          theme === "dark" ? "text-slate-400" : "text-gray-600"
        }`}
      >
        © All rights reserved —  Sohith Kampalli
      </p>
    </footer>
  );
};

export default Footer;
