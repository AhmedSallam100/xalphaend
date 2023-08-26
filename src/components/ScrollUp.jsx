import React from "react";
import { useEffect } from "react";

const ScrollUp = () => {
  useEffect(() => {
    const scrollTop = document.getElementById("scroll-up");
    function scrolltop() {
      if (this.scrollY >= 650) scrollTop.classList.add("show-scroll");
      else scrollTop.classList.remove("show-scroll");
    }
    window.addEventListener("scroll", scrolltop);
    scrollTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }, []);
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <span className="scrollup" id="scroll-up">
      <i className="uil uil-angle-double-up scrollup-icon"></i>
    </span>
  );
};

export default ScrollUp;
