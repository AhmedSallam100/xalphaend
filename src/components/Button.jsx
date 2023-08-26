import React from "react";

const Button = (props) => {
  return (
    <a
      href={props.href}
      rel="noreferrer"
      className="btn-shape my-a"
      download={props.download}
    >
      الذهاب
      <i className="uil uil-angle-right-b my-i"></i>
    </a>
  );
};

export default Button;
