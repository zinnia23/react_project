import React from "react";
import Layout from "./../components/Layout/Layout";
import Carousel from "./../components/carousel";
import Who from "./../components/who";
import Logos from "./../components/logos";
import { Link } from "react-router-dom";
import Banner from "../images/homebg.mp4";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="home">
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
        <Logos/>
      </Layout>
    </div>
  );
};

export default Home;
