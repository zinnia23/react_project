import React, { useRef, useState } from "react";
import "../styles/HomeStyles.css";
import { Container, Typography, Link, Grid } from "@mui/material";
import line from "../images/line.png";

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
        <Typography variant="h4" align="center" sx={{fontFamily: `'Ubuntu', sans-serif`}}>
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
        <Container id="counterContainer-large">
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number">
                14+
              </Typography>
              <Typography class="stats-text">Years in Innovation</Typography>
            </Grid>

            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number">
                500+
              </Typography>
              <Typography class="stats-text">Engineering Team</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography pb={2} class="timer count-number">
                2500+
              </Typography>
              <Typography class="stats-text">Products Delivered</Typography>
            </Grid>
          </Grid>
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number">
                20+
              </Typography>
              <Typography class="stats-text">Industries Served</Typography>
            </Grid>

            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number">
                600+
              </Typography>
              <Typography class="stats-text">Portfolio Startups</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography pb={2} class="timer count-number">
                30+
              </Typography>
              <Typography class="stats-text">Innovation Events</Typography>
            </Grid>
          </Grid>
          {/* <div class="w-100"></div>
          <div class="col statspad">
            <div class="counter-box">
              <h2 class="stats-text">
                <span
                  class="counter"
                  data-number="14"
                  data-sign="+"
                  data-signtwo=""
                  data-signthree="K"
                >
                  14+
                </span>
              </h2>
              <p class="para-terms-count-text">Years in Innovation</p>
            </div>
          </div>
          <div class="col-1 statspadd text-center d-block">
            <img src={line} alt="stats-separator" class="" width="20"/>
          </div> */}
        </Container>
        <Container id="counterContainer-small">
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number">
                14+
              </Typography>
              <Typography class="stats-text">Years in Innovation</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography pb={2} class="timer count-number">
                500+
              </Typography>
              <Typography class="stats-text">Engineering Team</Typography>
            </Grid>
          </Grid>
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number">
                2500+
              </Typography>
              <Typography class="stats-text">Products Delivered</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography pb={2} class="timer count-number">
                20+
              </Typography>
              <Typography class="stats-text">Industries Served</Typography>
            </Grid>           
          </Grid>
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number">
                600+
              </Typography>
              <Typography class="stats-text">Portfolio Startups</Typography>
            </Grid>
            <Grid item xs={6}>
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
