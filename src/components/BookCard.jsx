import React from "react";
import Button from "./Button";

const BookCard = (props) => {
  return (
    <div className="wb-1 p-relative bg-white p-10 rad-10 ">
      <img
        style={{
          objectFit: props.objectFit ? "contain" : "fill",
        }}
        src={props.imgSrc}
        className="wb-1-img wb-3 wb-4 wb-5 wb-7 wb-8 wb-10 wb-11"
        alt="book"
      />
      <div className="text">
        <p>{props.text1}</p>
        <p>
          <span className="mspn-f">{props.bold}</span> {props.text2}
        </p>
        <p className="mt-0">ستحتاجه باذن الله</p>
      </div>
      <Button download={props.download} href={props.href} />
    </div>
  );
};

export default BookCard;
