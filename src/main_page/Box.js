import React from "react";
import "./Box.css";
import image1 from "./comment.jpg";
import image2 from "./click.jpg";
import image3 from "./bar.jpg";

function Box() {
  return (
    <>
      <div className="box_parent">
        <div className="box box1">
          <img src={image1} alt="comments" height={400} width={400} />
          <p>Find what others feel about the product</p>
          <button className="box-button">Explore</button>
        </div>
        <div className="box box2">
          <img src={image2} alt="comments" height={400} width={400} />
          <p>Click a photo & see if your product is not fake</p>
          <button className="box-button">Explore</button>
        </div>
        <div className="box box3">
          <img src={image3} alt="comments" height={400} width={400} />
          <p>See if your product is a registered </p>
          <button className="box-button">Explore</button>
        </div>
      </div>
    </>
  );
}

export default Box;
