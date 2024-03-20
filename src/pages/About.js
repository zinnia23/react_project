import React, { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import "../styles/About.css";
import Company from "../images/company.jpg";
import Vision from "../images/vision.jpg";
import Mission from "../images/mission.jpg";
import Bg from '../images/contactformbg.jpg';
import Contact from "../components/contactform";

const details = [
  {
    img: Bg,
    title: 'Contact Hash Technologies',
    desc: "We appreciate your interest in Hash Technologies. Please fill out the form below to get in touch with us.",
    color: "black",
  },
];

const About = () => {
  useState(() => {
    window.scroll(0, 0);
  });

  return (
    <>
      <Box id="about-image" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <div className="home" style={{ marginBottom: "50px" }}>
        <Typography
        variant="h1"
        align="center"
        className="text-light"
        sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "65px", '@media (max-width: 600px)': { fontSize: "40px" } }}
      >
        Learn About
      </Typography>
      <Typography
        variant="h1"
        align="center"
        sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "65px", color: "#17a2b8", '@media (max-width: 600px)': { fontSize: "40px" } }}
      >
        Who We Are!
      </Typography>
        </div>
      </Box>
      <Container sx={{  }}>
        <Grid container p={5} spacing={5}>
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
            <h2>OUR COMPANY</h2>
            <p>
              <br></br>
              At Hash Technologies, our commitment lies in delivering top-tier and exceptionally satisfying services spanning multiple domains within IT-Services and HR Services. We strive to set a benchmark in the industry by offering a comprehensive range of solutions tailored to meet your specific needs.
              ogies a one-stop solution
              for all the IT & HR requirements.
              <br />
              <br />
              In the realm of IT-Services, we excel in providing a diverse array of cutting-edge solutions. Our expertise encompasses but is not limited to software development, system integration, network infrastructure management, cloud computing, cybersecurity, data analytics, and emerging technologies. We are dedicated to leveraging the latest innovations to optimize your technological infrastructure and drive your business forward.

              <br />
              <br />
              
              In parallel, our HR Services division is geared towards delivering unparalleled support and solutions to meet your human resource needs. From talent acquisition and recruitment strategies to workforce management, training & development programs, performance evaluation frameworks, and HR consulting, we are committed to facilitating the growth and success of your organization through effective human capital management.

              <br />
              <br />
              At Hash Technologies, our team of skilled professionals combines industry knowledge with technological prowess to offer bespoke services that align seamlessly with your objectives. We prioritize client satisfaction, aiming not just to meet but exceed expectations, ensuring a partnership that fosters growth, efficiency, and success in all facets of your business.
              <br />
              <br />
              As founded by the curios minds and seasoned partners with decades of industry experience Hash Technologies directors has come a long way growing in different sectors like Public/Private Healthcare Education Hospitality Retail Banking Financials & Manufacturing Etc. to continue with our success and to keep a well-satisfied clientele, we are keeping our focus to deliver our best services in these sectors and hence this makes Hash Technologies a one-stop solution for all IT requirements.


            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Company} alt="Company" style={{ width: "100%", height: "auto" }} />
          </Grid>
        </Grid>
      </Container>
      <section className="background">
        <Container>
          <h2>OUR CORE VALUES</h2>
          <Grid container spacing={4} pt={5}>
            <Grid item xs={12} md={4}>
              <h4>Innovation</h4>
              <p>
                Continuous innovation drives our solutions, fostering
                cutting-edge technology, and inventive strategies. We cultivate
                a culture that encourages creative thinking and problem-solving
                to meet evolving industry needs.
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <h4>Reliability</h4>
              <p>
                Reliability is at the core of our services. We uphold trust and
                consistency in delivering robust solutions, ensuring seamless
                experiences, and building enduring relationships with our
                clients.
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <h4>Collaboration</h4>
              <p>
                We believe in the power of collaboration. Our teamwork culture
                empowers us to leverage diverse perspectives, foster open
                communication, and work cohesively to achieve remarkable
                results.
              </p>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Container sx={{ fontFamily: `'Ubuntu', sans-serif` }}>
        <Grid container p={5} spacing={5}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Vision} alt="Vision" style={{ width: "100%", height: "auto" }} />

          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <h2>OUR VISION</h2>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                We want to have a unique image in the market by providing the
                best customized solutions. We want to set the bar with a
                different perspective by enhancing, automating & helping our
                customers to transform digitally.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ fontFamily: `'Ubuntu', sans-serif` }}>
        <Grid container p={5} spacing={5}>
          <Grid item xs={12} md={6}>
            <h2>OUR MISSION</h2>
            <p style={{}}>
              "Our mission is to revolutionize industries through innovative
              technology solutions that empower businesses to thrive in the
              digital era. We aim to be the catalyst for change, fostering
              seamless integration of cutting-edge technologies that drive
              efficiency, productivity, and growth. Committed to excellence, we
              strive to deliver tailored, future-ready IT solutions that exceed
              client expectations. By prioritizing integrity, innovation, and
              sustainability, we endeavor to create a global impact, enriching
              lives and shaping a brighter, interconnected future.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Mission} id="mission"></img>
          </Grid>
        </Grid>
      </Container>
      <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px", margin: "20px 0" }}>
        Feel Free To Contact Us
      </div>
      <Contact details={details} />

    </>
  );
};

export default About;
