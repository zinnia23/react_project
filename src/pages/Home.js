import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import Carousel from "./../components/carousel";
import Who from "./../components/who";
import Logos from "./../components/logos";
import Contact from "./../components/contactform";
import { Link } from "react-router-dom";
import Banner from "../images/homebg.mp4";
import "../styles/HomeStyles.css";
import background from "./../images/contactbg.jpg";

const details = [
  {
    img: background,
    title: `We'd love to hear from you`,
    color: "white",
  },
];
const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      <div className="home" style={{ marginBottom: "50px" }}>
        <div id="heading">
          <h1>Transform with Us</h1>
        </div>
        <Link to="/menu" className="learn-button">
          LEARN MORE
        </Link>
      </div>
      <video autoPlay muted loop className="background-video">
        <source src={Banner} type="video/mp4" />
      </video>
      <Carousel />
      <Who />
      <Logos />
      <Contact details={details} />
    </div>
  );
};

export default Home;
