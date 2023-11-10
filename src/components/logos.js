import React from "react";
import "../styles/HomeStyles.css";
import { Container, Typography, Link, Grid, ImageList, ImageListItem } from "@mui/material";
import image1 from './../images/card-3.jpg'

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
      <Typography align="center" sx={{ fontSize: "35px", fontWeight: "bold" }}>
        Diversity Is Our Superpower
      </Typography>
      <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img.src, 121, item.rows, item.cols)}
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
const itemData = [
    {
        img: image1,
        title: 'Breakfast',
        rows: 2,
        cols: 2,
      },
]
