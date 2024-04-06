import React from "react";
import "../styles/HomeStyles.css";
import { Container, Typography, Link, Grid, ImageList, ImageListItem } from "@mui/material";
import image1 from './../images/card-3.jpg'
import image2 from './../images/HR.jpg'
import image3 from './../images/card4.jpg'
import image4 from './../images/card5.jpg'
import image5 from './../images/career1.jpg'
const itemData = [
    {
        img: image1,
        title: 'Breakfast',
        rows: 2,
        cols: 2,
      },
    {
        img: image2,
        title: 'Breakfast',
        rows: 4,
        cols: 2,
      },
    {
        img: image3,
        title: 'Breakfast',
        rows: 2,
        cols: 2,
      },
    {
        img: image4,
        title: 'Breakfast',
        rows: 2,
        cols: 2,
      },
    {
        img: image5,
        title: 'Breakfast',
        rows: 2,
        cols: 2,
      },
]
function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
const Logos = () => {
  return (
    <Container
      sx={{
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        padding: "30px 15px 40px",
      }}
    >
      <Typography align="center" pb={5} sx={{ fontSize: "35px",fontFamily: `'Ubuntu', sans-serif` }}>
        Diversity Is Our Core Strength
      </Typography>
      <ImageList
      sx={{ width: "100%", height: "auto" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Container>
  );
};
export default Logos;

