import React from "react";
import "./index.scss";
import { Rating } from "./Ratings/Ratings";

const index = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default index;
