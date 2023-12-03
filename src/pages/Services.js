import React, { useRef, useState, useContext } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Form from "../components/contactform";
import "../styles/About.css";
import background from "./../images/contactformbg.jpg";
import { useData } from "../DataContext";

const details = {
  img: background,
  title: `We'd love to hear from you`,
  desc: `We'd love to hear from you`,
  color: "black",
};

const Services = () => {
  const { sharedData } = useData();
  //   console.log(sharedData)

  return (
    <>
      <div id="image-team" className="home" style={{ marginBottom: "50px" }}>
        <Typography
          variant="h1"
          align="center"
          className="text-light"
          sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "65px" }}
        >
          Services
        </Typography>
        <Typography
          variant="h1"
          align="center"
          style={{
            fontFamily: `'Ubuntu', sans-serif`,
            fontSize: "65px",
            color: "#17a2b8",
          }}
        >
          We Provide!
        </Typography>
      </div>
      <Container
        sx={{
          backgroundImage: `url(${sharedData.image})`, // Replace with your image URL
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginBottom: "20px"
        }}
      >
        <Grid container spacing={1} p={5}>
          <Grid item sm={12} md={6} >
            <Box p={5} sx={{backgroundColor:"white", height:"100%"}}>
              <Typography
                align="center"
                variant="h1"
                color="black"
                sx={{ fontSize: "40px", fontFamily: `'Ubuntu', sans-serif`}}
              >
                {sharedData.name}
              </Typography>
              <Typography align="center" color="black" mt={5} paragraph sx={{ fontSize: "18px" }}>
                {sharedData.desc}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Form details={details} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Services;
