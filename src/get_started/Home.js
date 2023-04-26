import React from "react";
import image from "./buy.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div>
        <h1>Fake Product Detection</h1>
        <img src={image} alt="" height={"550px"} width={"1400px"} />
        <button>
          <Link to="/main_page">Get Started</Link>
        </button>
      </div>
    </>
  );
}

export default Home;
