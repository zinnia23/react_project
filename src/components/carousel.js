import React, {useState,useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../images/BG-Working-With-Entrepreneurs.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Grid } from "@mui/material";
import "../styles/HomeStyles.css";
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
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImagesData(data); // Set the retrieved data to the state
        
      } catch (error) {
        console.error('There was a problem fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
        {images.map((item) => { // replace images with imagesData
          return (
            <Carousel.Item >
              <Grid container spacing={6}>
                <Grid item sm={12} md={6}>
                  <img
                    className="w-100"
                    style={{ height: "60vh" }}
                    src={item.imgPath} // replace imgPath with name you assigned 
                    text="First slide"
                  />
                </Grid>
                <Grid item sm={12} md={6} sx={{height:"500px"}}>
                  <h2 class="text-dark">{item.label}</h2> // same here
                  <p class="p-5 text-justify">"{item.text}"</p> // same here
                  <h5 class="text-left text-dark">{item.name}</h5> // same here
                  <p class="text-left">{item.position}</p> // same here
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
