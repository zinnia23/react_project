import React, { useRef, useEffect, useContext } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Form from "../components/contactform";
import "../styles/About.css";
import background from "./../images/contactformbg.jpg";
import { useData } from "../DataContext";
import { useParams } from "react-router-dom";

const details = {
  img: background,
  title: `We'd love to hear from you`,
  // desc: `We'd love to hear from you`,
  color: "black",
};

const Services = () => {


  const { id } = useParams();
  const { sharedData, setSharedData } = useData();

  useEffect(() => {
    const fetchServiceById = async () => {
      try {
        // Fetch all services
        const response = await fetch("https://hashtech.pythonanywhere.com/api/services/");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const services = await response.json();

        // Find the relevant service based on the ID
        const service = services.find((service) => service.id === parseInt(id));
        if (!service) {
          throw new Error("Service not found");
        }

        // Update sharedData with the found service
        setSharedData(service);
      } catch (error) {
        console.error("Error fetching or processing service:", error);
      }
    };

    fetchServiceById();
  }, [id, setSharedData]);


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
        sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "65px", '@media (max-width: 600px)': { fontSize: "40px" } }}
      >
        Services
      </Typography>
      <Typography
        variant="h1"
        align="center"
        sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "65px", color: "#17a2b8", '@media (max-width: 600px)': { fontSize: "40px" } }}
      >
        We Provide!
      </Typography>
      </div>



      <Grid container  >
        <Grid item sm={12} md={12}>
        <Box p={2} marginLeft={"13%"} marginRight={"13%"}>
            <Typography textAlign="left" variant="h4">{sharedData.name}</Typography>
            <br></br>
            <br></br>
            <div textAlign="left" dangerouslySetInnerHTML={{ __html: sharedData.description }} />
            <br></br>
            <br></br>
          </Box>
        </Grid>

        <Grid item sm={12} md={12}>
          <Form details={details} />
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
