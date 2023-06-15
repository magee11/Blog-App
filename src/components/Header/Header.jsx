import React from "react";
import "./style.css";
const Header = ({title}) => {
  return (
    <div className="header">
        <label className="headerText">{title}</label>
    </div>
  );
};

export default Header;
