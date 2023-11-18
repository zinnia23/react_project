import React, { useRef, useState } from "react";
import "../styles/HomeStyles.css";
import { Container, Typography, Link, Grid } from "@mui/material";

const Who = (props) => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);
  let [count4, setCount4] = useState(0);
  let [count5, setCount5] = useState(0);
  let [count6, setCount6] = useState(0);
  const ref = useRef();
  // ref.current.addEventListner("scroll", () => {
  //   console.log('asdasd')
  // });
  const handleclick = () => {
    let i = 0;
    setCount2(500);
    setInterval(() => {
      if (i > 14) {
        return;
      }
      setCount1(i++);
      console.log(i);
    }, 50);
    // setInterval(() => {
    //   if (i > 2500) {
    //     return;
    //   }
    //   setCount2(i++);
    //   console.log(i);
    // });

    setCount3(2500);
    setCount4(20);
    setCount5(600);
    setCount6(30);
  };
  return (
    <section className="background" ref={ref} onClick={handleclick}>
      <Container
        className="who-text"
        sx={{ alignItems: "center", justifyContent: "center", color: "white" }}
        onScr
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
        <Container className="counterContainer">
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={4} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number" data-number="14">
              </Typography>
              <Typography class="stats-text">Years in Innovation</Typography>
            </Grid>

            <Grid item xs={4} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number">
                {count2}+
              </Typography>
              <Typography class="stats-text">Engineering Team</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography pb={2} class="timer count-number">
                {count3}+
              </Typography>
              <Typography class="stats-text">Products Delivered</Typography>
            </Grid>
          </Grid>
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number">
                {count4}+
              </Typography>
              <Typography class="stats-text">Industries Served</Typography>
            </Grid>

            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number">
                {count5}+
              </Typography>
              <Typography class="stats-text">Portfolio Startups</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography pb={2} class="timer count-number">
                {count6}+
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
