import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import Tw from "../../images/X_logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

import Usa from "../../images/usa1.png";
import India from "../../images/india1.png";
import { DataContext, useData } from "../../DataContext";

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
  const [listofservices, setListofservices] = useState({
    "Application Development & Maintenance": [],
  });

  const fetchData = async () => {
    try {
      const response = await fetch("https://hashtech.pythonanywhere.com/api/services/");
      if (response.ok) {
        const data = await response.json();

        const newData = data.map((item, index) => ({
          id: index + 1,
          name: item.name,
          link: "/services/"+item.id,
          desc: item.description,
          img: item.image,
        }));
        setListofservices({
          "Application Development & Maintenance": newData,
        });
      } else {
        console.error("Failed to fetch data from the API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { updateData } = useData();
  const sendData = (v) => {
    updateData(v);
  };
  const services = listofservices["Application Development & Maintenance"];
  return (
    <>
      <Box sx={{ bgcolor: "black", color: "white", padding: { xs: "50px", md: "100px" } }}>
        <Grid container spacing={8} pb={3}>
          <Grid item xs={12} md={6}>
            <img src={Logo} alt="logo" width="200" />
            <Typography paragraph sx={{ fontSize: "15px", paddingTop: "35px" }}>
              Hash Technologies has come a long way growing in
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


            <Grid container justifyContent="center" alignItems="center" paddingTop={"45px"} sx={{ margin: 0, width: '100%' }}>
              <Grid item xs={12} md={6} sx={{ margin: 0, padding: 0 }}>
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
                <Typography
                  align="center"
                  sx={{
                    fontFamily: `'Ubuntu', sans-serif`,
                    fontSize: "18px",
                  }}
                >
                  Hash Technologies LLC

                </Typography>
                <div class="p-3">
                  <Card.Text align="center">
                    40315 Michigan Ave #1055 Canton,
                    MI 48188
                  </Card.Text>
                </div>

              </Grid>
              <Grid item xs={12} md={6} sx={{ margin: 0, padding: 0 }}>

                <div class="location-card">
                  <img src={India} class="p-3"></img>
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
                <Typography
                  align="center"
                  sx={{
                    fontFamily: `'Ubuntu', sans-serif`,
                    fontSize: "18px",
                  }}
                >
                  Hash Techno Fusion Pvt Ltd

                </Typography>
                <div class="p-3">
                  <Card.Text align="center">
                    8-1-400/60, Tolichowki, Hyderabad, Telangana 500008
                  </Card.Text>
                </div>

              </Grid>
            </Grid>
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
                  <Link to="/our-team/1">
                    <ListItem button>
                      <ListItemText primary="India" />
                    </ListItem>
                  </Link>
                  <Link to="/our-team/0">
                    <ListItem button>
                      <ListItemText primary="USA" />
                    </ListItem>
                  </Link>
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

                {services.map((v) => (
                  <div key={v.id} style={{ marginBottom: "8px" }}>
                    <NavLink
                      style={{ color: "white", textDecoration: "none" }} // Inline styles for color and text decoration
                      to={v.link}
                      onClick={() => {
                        sendData(v);
                        window.scrollTo(0, 0); // Scroll to the top of the page
                      }}
                    >
                      {v.name}
                    </NavLink>
                  </div>
                ))}



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
              }}
            >
              <InstagramIcon />
              <LinkedInIcon />
              <YouTubeIcon />
              <FacebookIcon />
              <img src={Tw} alt="Twitter Logo" style={{ height: "30px", width: "30px", }} />

            </Box>
          </Grid>
          <Grid item xs={12} md={4} pb={2}>
            <Typography pt={3} sx={{ fontFamily: `'Ubuntu', sans-serif`, textAlign: { xs: "center", md: "right" } }}>
              Contact Information
            </Typography>
              <Typography pt={3} sx={{  textAlign: { xs: "center", md: "right" } }}>
                Phone: +1 779 232 9110             </Typography>

              <Typography pt={3} sx={{  textAlign: { xs: "center", md: "right" } }}>
                Email: Info@hashtechno.com             </Typography>
          </Grid>
        </Grid>
      </Box>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ backgroundColor: "black", color: "white", padding: "20px 0" }}
      >
        © 2024 Hash Technologies. All Rights Reserved.
      </Typography>
    </>
  );
};

export default Footer;
