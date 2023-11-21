import React from "react";
import "./style.scss";

function index({img,description}) {
  return (
    <div>
      <div className="card_container">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default index;
