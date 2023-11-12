import React from "react";
import "../styles/About.css";
import { Box, Grid } from "@mui/material";

const About = () => {
  return (
    <Box component={"Section"} className="team-banner">
      <Grid container className="align-items-center">
        <Grid item sm={12} md={12} className="text-center">
          <h1 >Heelo</h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
