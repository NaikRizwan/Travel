import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper" style={{ height: "290px", width: "100%" }}>
      <div className="shimmer"></div>
      <div className="shimmer-content"></div>
    </div>
  );
};

export default Shimmer;
