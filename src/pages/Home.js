import React, { useState } from "react";
import Carousel from "./../components/carousel";
import Who from "./../components/who";
import Logos from "./../components/logos";
import Contact from "./../components/contactform";
import { Link } from "react-router-dom";
import Banner from "../images/homebg.mp4";
import BannerMobile from "../images/homebg_mobile.mp4"; // Import mobile video
import background from "./../images/contactbg.jpg";
import hr1 from "./../images/hr1.png";
import trasform from "./../images/transformwithus.jpg";
import { Typography, Grid, Container } from "@mui/material";

const details = {
  img: background,
  title: `We'd love to hear from you`,
  color: "black",
};

const Home = () => {
  useState(() => {
    window.scroll(0, 0);
  });

  const statementStyle = {
    backgroundColor: "white",
    color: "#17a2b8",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Ubuntu, sans-serif",
  };

  const textStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    fontFamily: "Ubuntu, sans-serif",
  };

  return (
    <div>
      <div className="home" style={{ marginBottom: "90px" }}>
        <div id="heading">
          <h1>Transform with Us</h1>
        </div>
        <br></br>
        <div id="sbuheading">
          <h3>It’s not just a statement! it's an invitation to join hands with a dynamic technology partner committed to shaping the future.</h3>
          <h3>Join us on this transformative journey and witness the power of collaboration, innovation, and expertise. Let your business evolve, adapt, and thrive with Hash Technologies - where transformation is not just a destination but a continuous and exciting journey.</h3>
        </div>


        <Link to="/about" className="learn-button">

          LEARN MORE
        </Link>
      </div>
      <Container sx={{}}>

        <Grid container paddingTop={0} spacing={5}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >

            <p>
              At Hash Technologies, our commitment lies in delivering top-tier and exceptionally satisfying
              services spanning multiple domains within IT-Services and HR Services. We strive to set a
              benchmark in the industry by offering a comprehensive range of solutions tailored to meet
              your specific needs.
              <br />
              <br />
              In the realm of IT-Services, we excel in providing a diverse array of cutting-edge solutions. Our
              expertise encompasses but is not limited to software development, system integration,
              network infrastructure management, cloud computing, cybersecurity, data analytics, and
              emerging technologies. We are dedicated to leveraging the latest innovations to optimize your
              technological infrastructure and drive your business forward.
            </p>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <img src={trasform} alt="Example" style={{ maxWidth: "100%", height: "auto", paddingBottom: "40px", paddingTop: "20px" }} />
          </Grid>
        </Grid>

        <Grid container p={0} spacing={5}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <br></br>
            <br></br>
            <br></br>
            <img
              src={hr1}
              alt="Example"
              style={{
                maxWidth: "100%",
                minHeight: "80%",
                marginTop: "-15%",
                width: "100%",
                '@media only screen and (min-width: 600px)': {
                  width: "100%",
                }
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <p>
              In parallel, our HR Services division is geared towards delivering unparalleled support and
              solutions to meet your human resource needs. From talent acquisition and recruitment
              strategies to workforce management, training & development programs, performance
              evaluation frameworks, and HR consulting, we are committed to facilitating the growth and
              success of your organization through effective human capital management.
              <br />
              <br />
              At Hash Technologies, our team of skilled professionals combines industry knowledge with
              technological prowess to offer bespoke services that align seamlessly with your objectives. We
              prioritize client satisfaction, aiming not just to meet but exceed expectations, ensuring a
              partnership that fosters growth, efficiency, and success in all facets of your business.
              <br />
              <br />
              As founded by the curious minds and seasoned partners with decades of industry experience,
              Hash Technologies directors have come a long way, growing in different sectors like
              Public/Private Healthcare Education Hospitality Retail Banking Financials & Manufacturing, etc.
              To continue with our success and to keep a well-satisfied clientele, we are keeping our focus to
              deliver our best services in these sectors and hence this makes Hash Technologies a one-stop
              solution for all IT requirements.
            </p>
          </Grid>
        </Grid>


      </Container>
      {/* Conditional rendering of video based on screen size */}
      {window.innerWidth <= 600 ? (
        <video autoPlay muted loop className="background-video" style={{ objectFit: 'cover', width: '100%', height: '100%' }}>
          <source src={BannerMobile} type="video/mp4" />
        </video>

      ) : (
        <video autoPlay muted loop className="background-video"  style={{ objectFit: 'cover', width: '100%', height: '100%' }}>
          <source src={Banner} type="video/mp4" />
        </video>
      )}
      <Who />
      <Logos />
      <Contact details={details} />
    </div>
  );
};

export default Home;
