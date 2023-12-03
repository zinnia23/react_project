import React, { useEffect, useState } from "react";
import "../styles/HomeStyles.css";
import { Container, Typography, Link, Grid } from "@mui/material";

const Who = () => {
  const [isAlreadyRun, setIsAlreadyRun] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const counterContainer = document.querySelector(".counterContainer");
      const counters = document.querySelectorAll(".count-number");
      const triggerBottom =
        counterContainer.getBoundingClientRect().top + window.innerHeight / 2;

      if (window.scrollY >= triggerBottom && !isAlreadyRun) {
        counters.forEach((count) => {
          const animateCount = () => {
            const target = +count.getAttribute("data-target");
            const duration = 500;
            const increment = target / duration;

            let currentCount = 0;
            const counterAnimation = setInterval(() => {
              currentCount += increment;
              count.innerText = Math.ceil(currentCount) + "+";

              if (currentCount >= target) {
                clearInterval(counterAnimation);
                count.innerText = target + "+";
              }
            });
          };

          animateCount();
        });
        setIsAlreadyRun(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAlreadyRun]);
  return (
    <section className="background">
      <Container
        className="who-text"
        sx={{ alignItems: "center", justifyContent: "center", color: "white" }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontFamily: `'Ubuntu', sans-serif` }}
        >
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
        <Link className="learnMore" underline="none" variant="h5" color="white" href="/about">
          Learn More
        </Link>
        <Container className="counterContainer" id="counterContainer-large">
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} className="timer count-number" data-target="14">
                14+
              </Typography>
              <Typography className="stats-text">Years in Innovation</Typography>
            </Grid>

            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} className="timer count-number" data-target="500">
                500+
              </Typography>
              <Typography className="stats-text">Engineering Team</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography pb={2} className="timer count-number" data-target="2500">
                2500+
              </Typography>
              <Typography className="stats-text">Products Delivered</Typography>
            </Grid>
          </Grid>
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} className="timer count-number" data-target="20">
                20+
              </Typography>
              <Typography className="stats-text">Industries Served</Typography>
            </Grid>

            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} className="timer count-number" data-target="600">
                600+
              </Typography>
              <Typography className="stats-text">Portfolio Startups</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography pb={2} className="timer count-number" data-target="30">
                30+
              </Typography>
              <Typography className="stats-text">Innovation Events</Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className="counterContainer" id="counterContainer-small">
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} className="timer count-number" data-target="14">
                14+
              </Typography>
              <Typography className="stats-text">Years in Innovation</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography pb={2} className="timer count-number" data-target="500">
                500+
              </Typography>
              <Typography className="stats-text">Engineering Team</Typography>
            </Grid>
          </Grid>
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} className="timer count-number" data-target="2500">
                2500+
              </Typography>
              <Typography className="stats-text">Products Delivered</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography pb={2} className="timer count-number" data-target="20">
                20+
              </Typography>
              <Typography className="stats-text">Industries Served</Typography>
            </Grid>
          </Grid>
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} className="timer count-number" data-target="600">
                600+
              </Typography>
              <Typography className="stats-text">Portfolio Startups</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography pb={2} className="timer count-number" data-target="30">
                30+
              </Typography>
              <Typography className="stats-text">Innovation Events</Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </section>
  );
};
export default Who;
