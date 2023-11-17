import React, { useState } from "react";
import {
  AppBar,
  Box,
  Grid,
  Divider,
  Drawer,
  IconButton,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/mainlogo.png";
import MiniLogo from "../../images/minilogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import { Container, Nav } from "react-bootstrap";

const pages = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Our Team", link: "/about" },
  { name: "About", link: "/careers" },
];
const listofservices = {
  "Application Development & Maintenance": [
    { name: "Mobile Application Development", link: "" },
    { name: "Custom Web Development", link: "" },
    { name: "Product Discovery", link: "" },
    { name: "DevOps as a Service", link: "" },
    { name: "Salesforce Consulting", link: "" },
    { name: "AWS Activate", link: "" },
  ],
  "Emerging Technologies": [
    { name: "Artificial Intelligence", link: "" },
    { name: "Blockchain", link: "" },
    { name: "Internet of Things", link: "" },
    { name: "Extended Reality", link: "" },
  ],
  Creative: [
    { name: "Prototyping", link: "" },
    { name: "User Experience Design", link: "" },
  ],
  Technologies: [
    { name: "Python Development", link: "" },
    { name: "React Native Development", link: "" },
    { name: "ReactJS Development", link: "" },
    { name: "PHP Development", link: "" },
    { name: "Angular Development", link: "" },
    { name: "Full Stack Developers", link: "" },
    { name: "WordPress Development", link: "" },
  ],
};
const returnServicesMenu = () => {
  return (
    <Grid container className="smallscreen" >
      {Object.keys(listofservices).map((heading) => {
        return (
          <>
            {/* <Grid item xs={12} md={3}> */}
            <Typography
              className="text"
              sx={{
                fontFamily: `'Ubuntu', sans-serif !important`,
                fontSize: `20px !important`,
                color: "#17a2b8 !important",
              }}
              variant="h5"
              width={{ sm: "100%", md: "20%" }}
            >
              {heading}
            </Typography>
            {listofservices[heading].map((v) => {
              return (
                <Typography sx={{ padding: "0.7rem 0" }}>{v.name}</Typography>
              );
            })}
            {/* </Grid> */}
          </>
        );
      })}
    </Grid>
  );
};
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const handleServicesClick = () => {
    if (document.getElementById("service-menu").hidden == true || document.getElementById("service-menu-s").hidden == true ) {
      document.getElementById("service-menu").hidden = false;
      document.getElementById("service-menu-s").hidden = false;
    } else {
      document.getElementById("service-menu").hidden = true;
      document.getElementById("service-menu-s").hidden = true;
      // document.getElementById("service-menu").style.display = "none";
    }
  };
  const drawer = (
    <Box 
    // onClick={handleDrawerToggle}
     sx={{ textAlign: "center" }}>
      {/* <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, mx: 2 }}
      >
        <img src={Logo} alt="logo" width={"50px"} />
      </Typography>
      <Divider /> */}
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="#" onClick={handleServicesClick}>Services</NavLink>
          <Container hidden id="service-menu-s" className="smallservice">
            {returnServicesMenu()}
          </Container>
        </li>
        <li>
          <NavLink to={"/about"}>Our Team</NavLink>
        </li>
        <li>
          <NavLink to={"/careers"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact-us"} style={{ textDecoration: "none" }}>
            <Button id="headerbutton">Contact</Button>
          </NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar
        component={"nav"}
        className="sticky-top"
        sx={{ bgcolor: "black", padding: "0 25px" }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { md: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography color={"goldenrod"} variant="h6" component="div">
              <img src={MiniLogo} alt="logo" height="50" width="50" />
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              {pages.map((page) => {
                return (
                  <NavLink
                  activeClassName={"active"}
                  className={"button-header"}
                  to={page.link}
                    style={{ textDecoration: "none" }}
                    onClick={page.name == "Services" ? handleServicesClick : ""}
                  >
                    <Button
                      key={page.name}
                      sx={{
                        my: 2,
                        display: "block",
                        color: "inherit",
                      }}
                      to={page.link}
                    >
                      {page.name}
                    </Button>
                  </NavLink>
                );
              })}
            </Box>
            <NavLink to={"/contact-us"} style={{ textDecoration: "none" }}>
              <Button id="headerbutton">Contact</Button>
            </NavLink>
          </Toolbar>
          <Container
            id="service-menu"
            className="service-dropdown"
            hidden
>
            <Typography
              variant="h5"
              sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "16px" }}
            >
              SERVICES
            </Typography>
            {returnServicesMenu()}
          </Container>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          anchor="top"
          variant="persistent"
          open={mobileOpen}
          // onClose={handleDrawerToggle}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              top: "64px",
              backgroundColor: "black",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
};
export default Header;
