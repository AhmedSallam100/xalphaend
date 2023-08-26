import React, { useEffect } from "react";

const ArticleCard = (props) => {
  /* useEffect(() => {
    let articleViews = document.querySelector(".articelViews");

    if (localStorage.getItem("articleViews") === null) {
      updateCounter("type=visit-articleviews");
    } else {
      updateCounter("type=articleviews");
    }

    function updateCounter(type) {
      fetch("http://127.0.0.1:3002?" + type)
        .then((res) => res.json())
        .then((data) => {
          articleViews.textContent = data.articleviews;
        });
    }

    localStorage.setItem("articleViews", "x");
  }, []); */
  return (
    <div className="wb-1 bg-white rad-6 p-10">
      <div className="box-img-article">
        <img
          src={props.imgSrc}
          className="wb-1-img wb-3 wb-4 wb-5 wb-7 wb-8 wb-12"
          alt="articel"
        />
      </div>
      <div>
        <div className="inf">
          <a href={props.articelSrc} className="my-h3 c-pointer">
            {props.articelTitle}
          </a>
        </div>
        <p
          className="tx-art"
          style={{
            direction: "rtl",
          }}
        >
          {props.articelDescripton}
        </p>
      </div>
      <div className="tx-inf">
        <div className="stlll">
          <img className="tx-img" src={props.writerImg} alt="" />
          <a href={props.writerProfile} className="mspn">
            {props.writerName}
          </a>
        </div>
        <span className="mspn">
          {props.articelViews}
          <i className="uil uil-eye"></i>
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
