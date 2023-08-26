import React from "react";

const PodcastCard = (props) => {
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
          <a
            href={props.podcastLink}
            target="_blank"
            rel="noreferrer"
            className="my-h3 c-pointer mb-20"
          >
            {props.podcastTitle}
          </a>
        </div>
      </div>
      <div className="tx-inf">
        <div className="stlll">
          <img className="tx-img" src={props.makerImg} alt="" />
          <a href={props.makerChannel} className="mspn">
            {props.makerName}
          </a>
        </div>
        <span className="mspn podcast-time">
          {props.podcastTime}
          {/* <i className="uil uil-eye"></i> */}
          <i className="uil uil-clock-nine ml-3"></i>
        </span>
      </div>
    </div>
  );
};

export default PodcastCard;
