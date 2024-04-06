import React, { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import "../styles/About.css";
import Company from "../images/company.jpg";
import Company1 from "../images/company1.jpg";
import Vision from "../images/vision.jpg";
import Mission from "../images/mission.jpg";
import Bg from '../images/contactformbg.jpg';
import Form from "../components/postresumeform";




const PostResume = () => {
    useState(() => {
      window.scroll(0, 0);
    });
  
    return (
      <>
        <Box id="about-image1" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <div className="home" style={{ marginBottom: "50px" }}>
            <Typography
              variant="h1"
              align="center"
              className="text-light"
              sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "65px", '@media (max-width: 600px)': { fontSize: "40px" } }}
            >
              Feel Free To 
            </Typography>
            <Typography
              variant="h1"
              align="center"
              sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "65px", color: "#17a2b8", '@media (max-width: 600px)': { fontSize: "40px" } }}
            >
              Join Us!
            </Typography>
          </div>
        </Box>
        <div style={{ backgroundColor: "#17a2b8", color: "#fff", textAlign: "center", padding: "5% 5%" }}>
        <Typography
          component="div"
          variant="p"
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "20px",
            paddingLeft: "15%",
            paddingRight: "15%",
            '@media (max-width: 600px)': {
              fontSize: "20px"
            }
          }}
        >
          Why Choose a Career with Hash Technologies?
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ flex: "1 1 300px", margin: "10px", paddingLeft: "5%", paddingRight: "5%" }}>
            <Typography variant="h4" component="div" style={{ fontWeight: "bold" }}>
              Creativity and Freedom
            </Typography>
            <Typography variant="body1">
              We believe in giving our employees the creative space and freedom to explore, innovate, and excel in their roles.
            </Typography>
          </div>
          <div style={{ flex: "1 1 300px", margin: "10px", paddingLeft: "5%", paddingRight: "5%" }}>
            <Typography variant="h4" component="div" style={{ fontWeight: "bold" }}>
              Diversity and Inclusion
            </Typography>
            <Typography variant="body1">
              Hash Technologies is committed to fostering an inclusive workplace where different cultures are celebrated, and diverse perspectives are valued.
            </Typography>
          </div>
          <div style={{ flex: "1 1 300px", margin: "10px", paddingLeft: "5%", paddingRight: "5%" }}>
            <Typography variant="h4" component="div" style={{ fontWeight: "bold" }}>
              Collaboration and Efficiency
            </Typography>
            <Typography variant="body1">
              By bringing together a diverse team, we aim to combine strengths, inspire new ideas, and operate with maximum efficiency.
            </Typography>
          </div>

        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ flex: "1 1 300px", margin: "10px", paddingLeft: "10%", paddingRight: "10%" }}>
            <Typography variant="h4" component="div" style={{ fontWeight: "bold" }}>
              Career Development
            </Typography>
            <Typography variant="body1">
              We invest in the growth and development of our employees, providing opportunities for skill enhancement and career advancement.
            </Typography>
          </div>
          <div style={{ flex: "1 1 300px", margin: "10px", paddingLeft: "10%", paddingRight: "15%" }}>
            <Typography variant="h4" component="div" style={{ fontWeight: "bold" }}>
              Make a Difference
            </Typography>
            <Typography variant="body1">
              Join us in making a difference. At Hash Technologies, your contributions matter, and together, we can create transformative solutions.
            </Typography>
          </div>
        </div>
      </div>
          <Grid marginLeft={"15%"} marginRight={"15%"} textAlign={"center"} padding={"3%"} className="cantfind">
            <h1>Can't find the Job opening of your matching skill set? Do not worry! Send Us your Resume and We'll Look into it ! </h1>
          </Grid>

        <Form />

          <br></br>
          <br></br>
        
      
      </>
    );
  };
  
  export default PostResume;