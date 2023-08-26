import React from "react";
import alphaLogo from "../assets/img/alpha-logo.png";

const Header = () => {
  return (
    <div className="head bg-white p-15 between-flex">
      <div className="search p-relative">
        <input
          className="p-10 rad-10"
          type="search"
          placeholder="Type A Keyword"
        />
      </div>
      <span className="menu-icon">
        <i
          className="uil uil-bars open-aside"
          onClick={function () {
            document.querySelector("aside").classList.add("aside-open");
            localStorage.setItem("openSidebar", true);
          }}
        ></i>
      </span>
      {/* <img className="img-p logo-web" alt="" /> */}
      <a href="/">
        <img className="img-p" src={alphaLogo} alt="" />
      </a>
    </div>
  );
};

export default Header;
