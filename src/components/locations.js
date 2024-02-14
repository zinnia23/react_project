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
          <Grid container spacing={5} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={5}>
              <Card className="effect" style={{ minHeight: "450px" }}>
                <Card.Body>
                  <div class="location-card">
                    <img src={Usa} class="pb-4"></img>
                  </div>
                  <div class="p-3">
                    <Typography
                      align="center"
                      sx={{
                        fontFamily: `'Ubuntu', sans-serif`,
                        fontSize: "28px",
                      }}
                    >
                      USA
                    </Typography>
                  </div>
                  <div class="p-3">
                    <Card.Text align="center">
                      40315 Michigan Ave #1055 Canton,                    
                      <br></br>
                      MI 48188
                      <br></br>
                      <br></br>
                      Phone: +1 779-232-9110
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card className="effect" style={{ minHeight: "450px" }}>
                <Card.Body>
                  <div class="location-card">
                    <img src={india} class="p-3"></img>
                  </div>
                  <div class="p-3">
                    <Typography
                      align="center"
                      sx={{
                        fontFamily: `'Ubuntu', sans-serif`,
                        fontSize: "28px",
                      }}
                    >
                      India
                    </Typography>
                  </div>
                  <div class="p-3">
                    <Card.Text align="center">
                      8-1-400/60, Tolichowki, Hyderabad, Telangana 500008
                      <br></br>
                      <br></br>
                      Phone: +91 8686564347
                      <br></br>
                      +91 8977862561
                    </Card.Text>
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
