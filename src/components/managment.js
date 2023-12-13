import React from "react";
import "../styles/About.css";
import { Container, Typography, Link, Grid } from "@mui/material";
import Card from "react-bootstrap/Card";
import linkedinLogo from "../images/linkedin-logo.png";
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
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      paddingBottom: "10px",
                    }}
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
                  <Typography align="center" sx={{ fontSize: "16px" }}>
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
                  <Typography
                    align="left"
                    pb={1}
                    sx={{ fontSize: "23px", fontWeight: "600" }}
                  >
                    {item.text}
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    sx={{ fontSize: "18px" }}
                  >
                    {item.desc}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <img
                      src={linkedinLogo}
                      alt="LinkedIn Logo"
                      style={{
                        width: "20px",
                        marginRight: "5px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      align="right"
                      sx={{
                        fontSize: "18px",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      <a
                        href={item.linked}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.linked}
                      </a>
                    </Typography>
                  </div>
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
