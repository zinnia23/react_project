import React , {useEffect} from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import "../styles/About.css";
import Image from "../images/aboutbg.jpg";
import Company from "../images/company.jpg";
import Vision from "../images/vision.jpg";
import Mission from "../images/mission.jpg";
import Bg from '../images/contactformbg.jpg'
import Contact from "../components/contactform";


const details = [
  {
      img: Bg,
      title: 'Contact Hash Technologies',
      desc: "We appreciate your interest in Hash Technologies. Please fill out the form below to get in touch with us.",
      color:"black",
    },
]
const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <>
      <Box id="about-image" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <div className="home" style={{ marginBottom: "50px" }}>
          <Typography
            align="center"
            sx={{ fontFamily: `'Ubuntu', sans-serif` }}
          >
            <h1 style={{ fontSize: "65px", color: "white" }}>Who We Are !</h1>
          </Typography>
        </div>
      </Box>
      <Container sx={{ fontFamily: `'Ubuntu', sans-serif` }}>
        <Grid container p={5} spacing={5}>
          <Grid item xs={12} md={6}>
            <h2>OUR COMPANY</h2>
            <p style={{}}>
              Founded in 2021, Hash Technologies has come a long way growing in
              different sectors like Public/Private Healthcare Education
              Hospitality Retail Banking Financials & Manufacturing Etc To
              continue with our success and to keep a well-satisfied clientele
              we are keeping our focus to deliver our best services in these
              sectors and hence this makes Hash Technologies a one-stop solution
              for all the IT & HR requirements.
              <br />
              We, at Hash Technologies, provide you world-class and highly
              satisfactory services across various verticals in IT-Services & HR
              Services. In IT-Services we provide, Software & Hardware
              Solutions, DevSecOps, Digital Marketing, Web Development, Cloud
              Solutions, Data Management & Analytics, Machine Learning & AI,
              business technologies, consulting services, implementation
              services, advisory services and managed services. In HR-Services
              we Provide, Professional Staffing, Talent Acquisition, Resource
              outsourcing, Project management, Leadership Development &
              Training/Coaching.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Company} id="mission"></img>
          </Grid>
        </Grid>
      </Container>
      <section class="background">
        <Container>
          <h2>OUR CORE VALUES</h2>
          <Grid container spacing={4} pt={5}>
            <Grid item xs={12} md={4}>
              <h4>Innovation</h4>
              <p>
                Continuous innovation drives our solutions, fostering
                cutting-edge technology, and inventive strategies. We cultivate
                a culture that encourages creative thinking and problem-solving
                to meet evolving industry needs.
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <h4>Reliability</h4>
              <p>
                Reliability is at the core of our services. We uphold trust and
                consistency in delivering robust solutions, ensuring seamless
                experiences, and building enduring relationships with our
                clients.
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <h4>Collaboration</h4>
              <p>
                We believe in the power of collaboration. Our teamwork culture
                empowers us to leverage diverse perspectives, foster open
                communication, and work cohesively to achieve remarkable
                results.
              </p>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Container sx={{ fontFamily: `'Ubuntu', sans-serif` }}>
        <Grid container p={5} spacing={5}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Vision} id="mission"></img>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <h2>OUR VISION</h2>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                We want to have a unique image in the market by providing the
                best customized solutions. We want to set the bar with a
                different perspective by enhancing, automating & helping our
                customers to transform digitally.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ fontFamily: `'Ubuntu', sans-serif` }}>
        <Grid container p={5} spacing={5}>
          <Grid item xs={12} md={6}>
            <h2>OUR MISSION</h2>
            <p style={{}}>
              "Our mission is to revolutionize industries through innovative
              technology solutions that empower businesses to thrive in the
              digital era. We aim to be the catalyst for change, fostering
              seamless integration of cutting-edge technologies that drive
              efficiency, productivity, and growth. Committed to excellence, we
              strive to deliver tailored, future-ready IT solutions that exceed
              client expectations. By prioritizing integrity, innovation, and
              sustainability, we endeavor to create a global impact, enriching
              lives and shaping a brighter, interconnected future.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Mission} id="mission"></img>
          </Grid>
        </Grid>
      </Container>
      <div>
        <Contact details={details}/>
      </div>
    </>
  );
};

export default About;
