import React from "react";
import "../styles/HomeStyles.css";
import { Container, Typography, Link, Grid } from "@mui/material";

const Who = () => {
  return (
    <section className="background">
      <Container
        className="who-text"
        sx={{ alignItems: "center", justifyContent: "center", color: "white" }}
      >
        <Typography variant="h4" align="center">
          Who We Are
        </Typography>
        <Typography paragraph align="center" pt={4}>
          We, at Hash Technologies, provide you world-class and highly
          satisfactory services across various verticals in IT-Services & HR
          Services. In IT-Services we provide, Software & Hardware Solutions,
          DevSecOps, Digital Marketing, Web Development, Cloud Solutions, Data
          Management & Analytics, Machine Learning & AI, business technologies,
          consulting services, implementation services, advisory services and
          managed services. In HR-Services we Provide, Professional Staffing,
          Talent Acquisition, Resource outsourcing, Project management,
          Leadership Development & Training/Coaching.
        </Typography>
        <Link className="learnMore" underline="none" variant="h5" color="white">
          Learn More
        </Link>
        <Container  className="counterContainer">
          <Grid container mt={5} spacing={1} sx={{textAlign:"center"}}>
            <Grid item xs={4} sx={{borderRight: "2px solid white"}}>
              <Typography pb={2} class="timer count-number" >
                14+
              </Typography>
              <Typography class="stats-text" >Years in Innovation</Typography>
            </Grid>
            
            <Grid item xs={4} sx={{borderRight: "2px solid white"}}>
              <Typography pb={2} class="timer count-number">
                500+
              </Typography>
              <Typography class="stats-text">Engineering Team</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography pb={2} class="timer count-number">
                2500+
              </Typography>
              <Typography class="stats-text">Products Delivered</Typography>
            </Grid>
          </Grid>
          <Grid container mt={5} spacing={1} sx={{textAlign:"center"}}>
            <Grid item xs={4} sx={{borderRight: "2px solid white"}}>
              <Typography pb={2} class="timer count-number" >
                20+
              </Typography>
              <Typography class="stats-text" >Industries Served</Typography>
            </Grid>
            
            <Grid item xs={4} sx={{borderRight: "2px solid white"}}>
              <Typography pb={2} class="timer count-number">
                600+
              </Typography>
              <Typography class="stats-text">Portfolio Startups</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography pb={2} class="timer count-number">
                30+
              </Typography>
              <Typography class="stats-text">Innovation Events</Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </section>
  );
};

export default Who;
