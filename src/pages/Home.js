import React, { useState } from "react";
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
  const [statbarbool, setstatebarbool] = useState(false);
  const handleOnScroll = () => {
    if (
      window.scrollY +
        window.innerHeight -
        document.querySelector("section.background").offsetTop >
      0
    ) {
      setstatebarbool(true);
      console.log("true");
    }
    return()=>{
      
    }
  };
  return (
    <div onWheel={handleOnScroll}>
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
      <Who changeStats={statbarbool} />
      <Logos />
      <Contact details={details} />
    </div>
  );
};

export default Home;
