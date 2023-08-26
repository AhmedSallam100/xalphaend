import React from "react";
import Button from "./Button";

const WebCard = (props) => {
  return (
    <div className="wb-1 p-relative bg-white p-10 rad-10 ">
      <img
        src={props.imgSrc}
        className="blob-2 mt-5"
        style={{ marginTop: "25px" }}
        alt="HIo3Qee.md.png"
        border="0"
      />
      <div className="text">
        <p>{props.text1}</p>
        <p>
          <span className="mspn-f">{props.bold}</span> {props.text2}
        </p>
        <p className="mt-0">{props.text3}</p>
      </div>
      <Button href={props.href} />
    </div>
  );
};

export default WebCard;
