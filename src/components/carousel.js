import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../images/BG-Working-With-Entrepreneurs.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Grid } from "@mui/material";
// import "../styles/HomeStyles.css";
import CEO from "../images/CEO.jpg";
import CO from "../images/career1.jpg";
import HR from "../images/HR.jpg";

const images = [
  {
    label: "Hash Technologies",
    text: "We, at Hash Technologies, provide you world-class and highly satisfactory services across various verticals in IT-Services & HR Services.",
    name: "James Andrew",
    position: "CEO",
    imgPath: CEO,
  },
  {
    label: "Hash Technologies",
    text: "In IT-Services we provide, Software & Hardware Solutions, DevSecOps, Digital Marketing, Web Development, Cloud Solutions, Data Management & Analytics, Machine Learning & AI, business technologies, consulting services, implementation services, advisory services and managed services.",
    name: "Saim Ali",
    position: "Co-Founder",
    imgPath: CO,
  },
  {
    label: "Hash Technologies",
    text: "In HR-Services we Provide, Professional Staffing, Talent Acquisition, Resource outsourcing, Project management, Leadership Development & Training/Coaching.",
    name: "Faraz Toor",
    position: "HR",
    imgPath: HR,
  },
];

const CarouselBox = () => {
  return (
    <Container sx={{ padding: "80px 15px" }}>
      <img
        src={ExampleCarouselImage}
        style={{
          position: "absolute",
          width: "30%",
          top: "110%",
          left: "0",
          height: "60%",
        }}
      ></img>
      <Carousel interval={null} className="text-center">
        {images.map((item) => {
          return (
            <Carousel.Item className="">
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <img
                    className="w-100"
                    style={{ height: "60vh" }}
                    src={item.imgPath}
                    text="First slide"
                  />
                </Grid>
                <Grid item xs={12} sm={6} p={10} sx={{height:"500px"}}>
                  <h2 class="text-dark">{item.label}</h2>
                  <p class="p-5 text-justify">"{item.text}"</p>
                  <h5 class="text-left text-dark">{item.name}</h5>
                  <p class="text-left">{item.position}</p>
                </Grid>
              </Grid>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};
export default CarouselBox;
