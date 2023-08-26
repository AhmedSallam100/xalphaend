import React from "react";

const MainTitle = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <h1 dir="rtl" className="p-relative main-title">
        {props.title}
      </h1>
    </div>
  );
};

export default MainTitle;
