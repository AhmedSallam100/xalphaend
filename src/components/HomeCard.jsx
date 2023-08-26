import React from "react";
import Button from "./Button";

const HomeCard = (props) => {
  return (
    <div className="wb-1 cs-wb p-relative bg-white p-10 rad-10">
      <div className="text-2">
        <i className={`uil ${props.icon} icon-2`}></i>
        <div className="stl-txt">{props.title}</div>
      </div>
      <div className="text">
        <p>{props.text1}</p>
        <p>
          <span className="mspn">{props.text2}</span>
        </p>
        <p className="mt-0">باذن الله</p>
      </div>
      <Button href={props.href} />
    </div>
  );
};

export default HomeCard;
