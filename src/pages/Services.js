import React, { useRef, useState, useContext } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Form from "../components/contactform";
import "../styles/About.css";
import background from "./../images/contactformbg.jpg";
import { useData } from "../DataContext";

const details = {
  img: background,
  title: `We'd love to hear from you`,
  // desc: `We'd love to hear from you`,
  color: "black",
};

const Services = () => {
  const { sharedData } = useData();
  console.log('sharedData');
  console.log(sharedData);
  console.log(sharedData);

  return (
    <>
      <div
        id="image-team"
        className="home"
        style={{ marginBottom: "50px" }}
      >
        <Typography
          variant="h1"
          align="center"
          className="text-light"
          sx={{
            fontFamily: `'Ubuntu', sans-serif`,
            fontSize: "65px",
          }}
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
          marginBottom: "20px",
        }}
      >
        <Grid container  >
          <Grid item sm={12} md={12}>
            <Box p={5} sx={{ backgroundColor: "white", height: "100%" }}>
              <Typography
                align="center"
                variant="h1"
                color="black"
                sx={{
                  fontSize: "30px",
                  fontFamily: `'Ubuntu', sans-serif`,
                }}
              >
                {sharedData.name}
              </Typography>
              <Typography
                align="center"
                color="black"
                mt={5}
                paragraph
                sx={{
                  fontSize: "18px",
                  whiteSpace: "pre-line", // Add this CSS property
                  "@media (max-width: 600px)": {
                    fontSize: "16px", // Adjust font size for mobile screens
                  },
                }}
              >
{sharedData.desc.split("\n").map((line, index) => (
  <React.Fragment key={index}>
    {line.trim().startsWith(';;bold') ? (
      <Typography
        align="center"
        sx={{
          fontSize: "22px",
          "@media (max-width: 600px)": {
            fontSize: "20px",
            marginLeft: "-30px",
            marginRight: "-35px", // Adjust font size for mobile screens
          },
        }}
        fontWeight="bold"
        lineHeight={2.4}
        mt={index === 0 ? 0 : 2} // Add margin top only for the first subheading
      >
        {line.trim().substring(6)} {/* Extract the text after ';;bold' */}
      </Typography>
    ) : (
      <Typography
        sx={{
          fontSize: "16px",
          lineHeight: "2.5",
          align: "center",
          "@media (max-width: 600px)": {
            fontSize: "16px", 
            marginLeft: "-30px",
            marginRight: "-35px",
          },
        }}
      >
        {line}
      </Typography>
    )}
  </React.Fragment>
))}

              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={12}>
            <Form details={details} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Services;
