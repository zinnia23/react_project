import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography, Grid, Button , List, ListItem, ListItemText} from "@mui/material";
import Logo from "./../../images/mainlogo.jpeg";
import "../../styles/HomeStyles.css";

const data = [
  { id: 1, text: 'Consulting services' },
  { id: 2, text: 'Implementation Services' },
  { id: 3, text: 'Advisory Services' },
  { id: 4, text: 'Managed services' },
  { id: 5, text: 'Digital transformation' },
  { id: 6, text: 'Software Solutions' },
  { id: 7, text: 'Hardware Solutions' },
  { id: 8, text: 'DevSecOps' },
  { id: 9, text: 'Digital Marketing' },
  { id: 10, text: 'Web development' },
  { id: 11, text: 'Cloud Solutions' },
  { id: 12, text: 'Data Management & Analytics' },
  { id: 13, text: 'Machine Learning & AI' },
  { id: 14, text: 'Automation' },
];

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "black", color: "white", padding: "100px" }}>
        <Grid container spacing={10}>
          <Grid item sm={12} md={4}>
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
            <Button variant="outlined" sx={{ color: "white" }}>
              Learn More
            </Button>
          </Grid>
          <Grid item sm={12} md={8}>
            <Grid item sm={12} md={4}>
              <Typography variant="h5" align="left">Services</Typography>
              <List className="list" >
                {data.map((item) => (
                  <ListItem key={item.id} >
                    <ListItemText primary={item.text} class="listitem" sx={{padding:"0"}}/>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item sm={12} md={4}></Grid>
            <Grid item sm={12} md={4}></Grid>
          </Grid>
        </Grid>
        {/* <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >

          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Techinfo YT
        </Typography> */}
      </Box>
    </>
  );
};

export default Footer;
