import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  Box,
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
} from "@mui/material";
import Logo from "./../../images/mainlogo.png";
import "../../styles/HomeStyles.css";
import Form from "react-bootstrap/Form";

const team = [
  { id: 1, text: "USA" },
  { id: 2, text: "India" },
];

const Footer = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch services data
    fetch("http://127.0.0.1:8000/api/services/")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <>
      <Box sx={{ bgcolor: "black", color: "white", padding: { xs: "50px", md: "100px" } }}>
        <Grid container spacing={8} pb={3}>
          <Grid item xs={12} md={6}>
            <img src={Logo} alt="logo" width="200" />
            <Typography paragraph sx={{ fontSize: "15px" }}>
              Founded in 2021, Hash Technologies has come a long way growing in
              different sectors like Public/Private Healthcare Education
              Hospitality Retail Banking Financials & Manufacturing Etc To
              continue with our success and to keep a well-satisfied clientele
              we are keeping our focus to deliver our best services in these
              sectors and hence this makes Hash Technologies a one-stop solution
              for all the IT & HR requirements.
            </Typography>
            <Link to="/about">
              <Button variant="outlined" id="learnbutton">
                Learn More
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={{ xs: "1", md: "10" }}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h5"
                  align="left"
                  sx={{ fontFamily: `'Ubuntu', sans-serif` }}
                >
                  Our Team
                </Typography>
                <List className="list">
                  {team.map((item) => (
                    <Link to="/our-team" key={item.id}>
                      <ListItem>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h5"
                  align="left"
                  sx={{ fontFamily: `'Ubuntu', sans-serif` }}
                >
                  Services
                </Typography>
                <List className="list">
                  {services.map((item) => (
                    <ListItem key={item.id}>
                      <Link to={{ pathname: "/services", state: { serviceData: item } }}>
                        <ListItemText
                          primary={item.name}
                          class="listitem"
                          sx={{ padding: "0" }}
                        />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "white" }} />
        <Grid container>
          <Grid item xs={12} md={4} pb={2}>
            <Typography pt={3} sx={{ fontFamily: `'Ubuntu', sans-serif`, textAlign: { xs: "center", md: "left" } }}>
              Stay Connected With Our Latest Insights
            </Typography>
            <Box
              pt={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Form.Control
                type="text"
                id="inputPassword5"
                placeholder="Your Email Address"
                aria-describedby="passwordHelpBlock"
              />
              <Button size="medium" id="headerbutton">
                Submit
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} pb={2}>
            <Typography pt={3} align="center" sx={{ fontFamily: `'Ubuntu', sans-serif` }}>
              Let's Connect
            </Typography>
            <Box
              pl={{ md: 3 }}
              sx={{
                my: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& svg": {
                  fontSize: "30px",
                  cursor: "pointer",
                  mr: 2,
                },
                "& svg:hover": {
                  color: "#17a2b8",
                  transform: "translateX(5px)",
                  transition: "all 400ms",
                },
              }}
            >
              <InstagramIcon />
              <TwitterIcon />
              <GitHubIcon />
              <YouTubeIcon />
              <FacebookIcon />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} pb={2}>
            <Typography pt={3} sx={{ fontSize: "13px", color: "#17a2b8", textAlign: { xs: "center" } }}>
              © 2023 Hash Technologies LLC
            </Typography>
            <Box
              pt={2}
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  color: "white",
                  textAlign: { xs: "center" },
                }}
              >
                Site Map | Terms of Use | Privacy Policy
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
