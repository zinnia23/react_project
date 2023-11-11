import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../images/BG-Working-With-Entrepreneurs.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container , Grid} from "@mui/material";
import "../styles/HomeStyles.css";
const images = [
  {
    label: "Hash Technologies",
    text: "We, at Hash Technologies, provide you world-class and highly satisfactory services across various verticals in IT-Services & HR Services.",
    name: "Scott Hanks",
    position: "Chief Officer",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Hash Technologies",
    text: "In IT-Services we provide, Software & Hardware Solutions, DevSecOps, Digital Marketing, Web Development, Cloud Solutions, Data Management & Analytics, Machine Learning & AI, business technologies, consulting services, implementation services, advisory services and managed services.",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Hash Technologies",
    text: "In HR-Services we Provide, Professional Staffing, Talent Acquisition, Resource outsourcing, Project management, Leadership Development & Training/Coaching.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
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
                {/* <Carousel.Caption>
                <p>{item.label}</p>
              </Carousel.Caption> */}
                </Grid>
                <Grid item xs={12} sm={6} p={15}>
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
