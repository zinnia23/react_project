import React from "react";
import "../styles/HomeStyles.css";
import { Container, Typography, Box, Grid } from "@mui/material";
import Card from "react-bootstrap/Card";
import Usa from "../images/usa.png";
import india from "../images/india.png";
import pak from "../images/pakistan.png";

const Location = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          padding: "30px 80px",
        }}
      >
        <Typography
          align="center"
          sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "35px" }}
          pb={5}
        >
          Locations
        </Typography>
        <Box>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Card className="effect" style={{ minHeight: "350px" }}>
                <Card.Body>
                  <img src={Usa} class="pb-4"></img>
                  <div class="p-3">
                    <Typography
                      sx={{
                        fontFamily: `'Ubuntu', sans-serif`,
                        fontSize: "28px",
                      }}
                      pb={4}
                    >
                      USA
                    </Typography>
                    <Card.Text>40315 Michigan Ave, Canton, Michigan 48188, US</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="effect" style={{ minHeight: "350px" }}>
                <Card.Body>
                  <img src={india} class="p-3" ></img>
                  <div class="p-3">
                    <Typography
                      sx={{
                        fontFamily: `'Ubuntu', sans-serif`,
                        fontSize: "28px",
                      }}
                      pb={4}
                    >
                      India
                    </Typography>
                    <Card.Text>Hyderabad, Telangana 500008.</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="effect" style={{ minHeight: "350px" }}>
                <Card.Body>
                  <img src={pak} class="p-3" width="129px"></img>
                  <div class="p-3">
                    <Typography
                      sx={{
                        fontFamily: `'Ubuntu', sans-serif`,
                        fontSize: "28px",
                      }}
                      pb={4}
                    >
                      Pakistan
                    </Typography>
                    <Card.Text>Hyderabad, Telangana 500008.</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default Location;
