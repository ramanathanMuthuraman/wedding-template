import React from "react";
import "./Home.css";
import Ribbon from "../components/Ribbon/Ribbon";

const Home = () => {
  return (
    <div className="home">
      <div className="name-wrapper">
        <span className="name">Saraswathi</span>
        <span className="separator">&amp;</span>
        <span className="name">Mani Muthiah</span>
      </div>
      <div className="ribbon-wrapper">
        <Ribbon>are getting married</Ribbon>
      </div>
      <div className="info-wrapper">
        <span className="info">August 24, 2020</span>
        <span className="separator">|</span>
        <span className="info">Ponnamaravathi</span>
      </div>
    </div>
  );
};

export default Home;
