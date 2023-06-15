import React from "react";
import "./style.css";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <label className="footerText">Blog APP &copy; {CurrentYear}</label>
    </div>
  );
};

export default Footer;
