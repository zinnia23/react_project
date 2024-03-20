import React from "react";
import "../styles/About.css";
import { Container, Typography, Link, Grid } from "@mui/material";
import Card from "react-bootstrap/Card";
import linkedinLogo from "../images/linkedin-logo.png";

const Managment = ({ details }) => {
  return (
    <section>
      <Container>
        {details.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                marginBottom: "20px",
                width: "90%", // Adjust container width as needed
              }}
            >
              <Card>
                <div
                  // id="nohoverbody"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0px",
                  }}
                >
                  <div
                    style={{
                      width: "150px", // Fixed width for the image holder
                      marginBottom: "20px", // Spacing between image holder and text
                      position: "relative",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        borderRadius: "50%",
                        width: "100%", // Ensure image fills the holder
                        objectFit: "cover", // Maintain aspect ratio
                      }}
                    />
                    <a href={item.linked} target="_blank" rel="noopener noreferrer">
                      <img
                        src={linkedinLogo}
                        alt="LinkedIn Logo"
                        style={{
                          position: "absolute",
                          bottom: "5px",
                          right: "5px",
                          width: "20px",
                          cursor: "pointer",
                        }}
                      />
                    </a>
                  </div>
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
                  <Typography align="center" sx={{ fontSize: "16px", fontWeight:"bold" }}>
                    {item.text}
                  </Typography>
                  <br></br>
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontSize: "16px", textAlign: "center"}} 
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </Card>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Managment;
