import React, { useEffect, useState } from "react";
import "../styles/HomeStyles.css";
import { Container, Typography, Link, Grid } from "@mui/material";

const Who = (props) => {
  // let [count1, setCount1] = useState(0);
  // let [count2, setCount2] = useState(0);
  // let [count3, setCount3] = useState(0);
  // let [count4, setCount4] = useState(0);
  // let [count5, setCount5] = useState(0);
  // let [count6, setCount6] = useState(0);
  // const ref = useRef();
  // // ref.current.addEventListner("scroll", () => {
  // //   console.log('asdasd')
  // // });
  // const handleclick = () => {
  //   let i = 0;
  //   setCount2(500);
  //   setInterval(() => {
  //     if (i > 14) {
  //       return;
  //     }
  //     setCount1(i++);
  //     console.log(i);
  //   }, 50);
  //   // setInterval(() => {
  //   //   if (i > 2500) {
  //   //     return;
  //   //   }
  //   //   setCount2(i++);
  //   //   console.log(i);
  //   // });

  //   setCount3(2500);
  //   setCount4(20);
  //   setCount5(600);
  //   setCount6(30);
  // };

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
            const duration = 700;
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
        onScr
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
        <Link className="learnMore" underline="none" variant="h5" color="white">
          Learn More
        </Link>
        <Container className="counterContainer" id="counterContainer-large">
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number" data-target="14">
                14+
              </Typography>
              <Typography class="stats-text">Years in Innovation</Typography>
            </Grid>

            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number" data-target="500">
                500+
              </Typography>
              <Typography class="stats-text">Engineering Team</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography pb={2} class="timer count-number" data-target="2500">
                2500+
              </Typography>
              <Typography class="stats-text">Products Delivered</Typography>
            </Grid>
          </Grid>
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number" data-target="20">
                20+
              </Typography>
              <Typography class="stats-text">Industries Served</Typography>
            </Grid>

            <Grid item xs={6} sm={4} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number" data-target="600">
                600+
              </Typography>
              <Typography class="stats-text">Portfolio Startups</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography pb={2} class="timer count-number" data-target="30">
                30+
              </Typography>
              <Typography class="stats-text">Innovation Events</Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className="counterContainer" id="counterContainer-small">
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number" data-target="14">
                14+
              </Typography>
              <Typography class="stats-text">Years in Innovation</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography pb={2} class="timer count-number" data-target="500">
                500+
              </Typography>
              <Typography class="stats-text">Engineering Team</Typography>
            </Grid>
          </Grid>
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number" data-target="2500">
                2500+
              </Typography>
              <Typography class="stats-text">Products Delivered</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography pb={2} class="timer count-number" data-target="20">
                20+
              </Typography>
              <Typography class="stats-text">Industries Served</Typography>
            </Grid>
          </Grid>
          <Grid container mt={5} spacing={1} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sx={{ borderRight: "2px solid white" }}>
              <Typography pb={2} class="timer count-number" data-target="600">
                600+
              </Typography>
              <Typography class="stats-text">Portfolio Startups</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography pb={2} class="timer count-number" data-target="30">
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
// JavaScript logic for counter animation on scroll
// window.addEventListener("scroll", () => {
//   const counters = document.querySelectorAll(".timer");
//   const triggerBottom = (window.innerHeight / 5) * 4;

//   counters.forEach((counter) => {
//     const counterTop = counter.getBoundingClientRect().top;

//     if (counterTop < triggerBottom) {
//       const updateCount = () => {
//         const target = +counter.getAttribute("data-target");
//         const count = +counter.innerText;
//         const increment = target / 200; // Change the animation speed if needed

//         if (count < target) {
//           counter.innerText = Math.ceil(count + increment);
//           setTimeout(updateCount, 1);
//         } else {
//           counter.innerText = target;
//         }
//       };

//       updateCount();
//     }
//   });
// });
var isAlreadyRun = false;

// $(window).scroll( function(){

//     $('#counterContainer-large').each( function(i){

//         var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
//         var bottom_of_window = $(window).scrollTop() + $(window).height();

//             if( bottom_of_window > ( bottom_of_object + 20 )  ){
// 				if (!isAlreadyRun) {
// 					$('.count-number').each(function () {

// 	                $(this).prop('Counter', 0).animate({
// 	                    Counter: $(this).text()
// 	                }, {
// 	                        duration: 3500,
// 	                        easing: 'swing',
// 	                        step: function (now) {
// 	                            $(this).text(Math.ceil(now));
// 	                        }
// 	                    });
// 	            	});
// 				}
//                 isAlreadyRun = true;
//             }
//     });

// });
