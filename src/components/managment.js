import React from "react";
import "../styles/About.css";
import { Container, Typography, Link, Grid } from "@mui/material";
import Card from "react-bootstrap/Card";

const Managment = ({ details }) => {
  return (
    <section>
      <Grid container spacing={2}>
        {details.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card id="hovercard">
                <div id="nohoverbody">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    style={{ borderRadius: "50%", width: "150px",paddingBottom:"10px" }}                  
                  />
                  <Typography
                    align="center"
                    sx={{
                      fontFamily: `'Ubuntu', sans-serif`,
                      fontSize: "20px",
                    }}
                    pb={1}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="h5" align="center">
                    {item.text}
                  </Typography>
                </div>
                <Card.Body id="hoverbody">
                  <Typography
                    align="left"
                    sx={{
                      fontFamily: `'Ubuntu', sans-serif`,
                      fontSize: "30px",
                    }}
                    pb={1}
                  >
                    {item.name}
                  </Typography>
                  <Typography align="left" pb={1} sx={{fontSize:"23px", fontWeight:"600"}}>
                    {item.text}
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    sx={{ fontSize: "18px" }}
                  >
                    Ad magna ullamco quis occaecat ut. Nisi sunt labore in velit
                    non nostrud Lorem. Dolor et nisi incididunt amet tempor
                    irure labore eu. Incididunt sint sunt laboris nulla nulla
                    adipisicing minim pariatur irure ex nisi exercitation sit.
                  </Typography>
                </Card.Body>
              </Card>
            </Grid>
          );
        })} 
      </Grid>
    </section>
  );
};

export default Managment;
