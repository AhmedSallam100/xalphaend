import React from "react";
import alphaLogo from "../assets/img/alpha-logo.png";

const Header = () => {
  return (
    <div className="head bg-white p-15 between-flex">
      <div className="search p-relative">
        <input
          className="p-10 rad-10"
          type="search"
          placeholder="البحث"
        />
      </div>
      <span className="menu-icon">
        <i
          className="uil uil-bars open-aside"
          onClick={() =>
            document.querySelector("aside").classList.add("aside-open")
          }
        ></i>
      </span>
      <a href="/">
        <img className="img-p" src={alphaLogo} alt="" />
      </a>
    </div>
  );
};

export default Header;
