import React from "react";
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
  TextField,
} from "@mui/material";
import Logo from "./../../images/mainlogo.jpeg";
import "../../styles/HomeStyles.css";
import Form from "react-bootstrap/Form";

const data = [
  { id: 1, text: "Mobile Application Development" },
  { id: 2, text: "Custom Web Development" },
  { id: 3, text: "Product Discovery" },
  { id: 4, text: "DevOps as a Service" },
  { id: 5, text: "Salesforce Consulting" },
  { id: 6, text: "AWS Activate" },
  { id: 7, text: "Artificial Intelligence" },
  { id: 8, text: "Blockchain" },
  { id: 9, text: "Internet of Things" },
  { id: 10, text: "Extended Reality" },
  { id: 11, text: "Prototyping" },
  { id: 12, text: "User Experience Design" },
  { id: 13, text: "Python Development" },
  { id: 14, text: "React Native Development" },
  { id: 15, text: "ReactJS Development" },
  { id: 16, text: "PHP Development" },
  { id: 17, text: "Angular Development" },
  { id: 18, text: "Full Stack Developers" },
  { id: 19, text: "WordPress Development" },
];
const team = [
  { id: 1, text: "USA" },
  { id: 2, text: "India" },
  { id: 3, text: "Pakistan" },
];

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "black", color: "white", padding: "100px" }}>
        <Grid container spacing={8} pb={3}>
          <Grid item xs={12} md={6}>
            <img src={Logo} alt="logo" width="100" />
            <Typography paragraph pt={3} sx={{ fontSize: "15px" }}>
              Founded in 2021, Hash Technologies has come a long way growing in
              different sectors like Public/Private Healthcare Education
              Hospitality Retail Banking Financials & Manufacturing Etc To
              continue with our success and to keep a well-satisfied clientele
              we are keeping our focus to deliver our best services in these
              sectors and hence this makes Hash Technologies a one-stop solution
              for all the IT & HR requirements.
            </Typography>
            <Button variant="outlined" id="learnbutton">
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={{xs:"1",md:"10"}}>
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
                    <ListItem key={item.id}>
                      <ListItemText primary={item.text} />
                    </ListItem>
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
                  {data.map((item) => (
                    <ListItem key={item.id}>
                      <ListItemText
                        primary={item.text}
                        class="listitem"
                        sx={{ padding: "0" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              {/* <Grid item sm={12} md={4}></Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "white" }} />
        <Box id="footerbox">
          <div class="pb-4 pr-4">
            <Typography pt={3} sx={{ fontFamily: `'Ubuntu', sans-serif` }}>
              Stay Connected With Our Latest Insights
            </Typography>
            <Box
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
          </div>
          <div id="divide" class="pb-4 pl-4">
            <Typography pt={3} align="center" sx={{ fontFamily: `'Ubuntu', sans-serif` }}>
              Let's Connect
            </Typography>
            <Box           
              sx={{
                my: 0.6,
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
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
          </div>
          <div id="divide">
            <Typography align="center" sx={{ fontSize: "13px", color: "#17a2b8" }}>
              © 2023 Hash Technologies LLC
            </Typography>
            <Box
              pt={2}
            >
              <Typography
                pr={1}
                align="center"
                sx={{
                  fontSize: "10px",
                  color: "white",
                }}
              >
                Site Map | Terms of Use | Privacy Policy
              </Typography>
            </Box>
          </div>
        </Box>       
      </Box>
    </>
  );
};

export default Footer;
