import React from "react";
import "./Box.css";
import image1 from "./comment.jpg";
import image2 from "./click.jpg";
import image3 from "./price.jpg";
import image4 from "./description.jpg";

function Box() {
  return (
    <>
      <div className="url_parent">
        <input
          class="url"
          type="text"
          placeholder="Insert url of your product"
        ></input>
      </div>
      <div className="box_parent">
        <div className="box box1">
          <img src={image1} alt="comments" height={400} width={400} />
          <p>Review Analysis</p>
          <button className="box-button">submit</button>
        </div>
        <div className="box box2">
          <img src={image2} alt="logo" height={400} width={400} />
          <p>Logo Analysis</p>
          <button className="box-button">submit</button>
        </div>
        <div className="box box3">
          <img src={image3} alt="price" height={400} width={400} />
          <p>Price Analysis</p>
          <button className="box-button">submit</button>
        </div>
        <div className="box box4">
          <img src={image4} alt="description" height={400} width={400} />
          <p>Description Analysis</p>
          <button className="box-button">submit</button>
        </div>
      </div>
    </>
  );
}

export default Box;
