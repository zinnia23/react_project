import React, { useRef, useState } from "react";
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
import { Anchor, Container, Nav } from "react-bootstrap";

const pages = [
  { name: "Home", link: "/" },
  { name: "Services", link: "" },
  { name: "Our Team", link: "/our-team" },
  { name: "About", link: "/about" },
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
    <Container className="smallscreen">
      {Object.keys(listofservices).map((heading) => {
        return (
          <>
            {/* <Grid item xs={12} md={3}> */}
            <Typography
              className="text"
              sx={{
                fontFamily: `'Ubuntu', sans-serif !important`,
                fontSize: `22px !important`,
                color: "#17a2b8 !important",
              }}
              variant="h5"
              width={{ sm: "100%", md: "30%" }}
            >
              {heading}
            </Typography>
            {listofservices[heading].map((v) => {
              return (
                <Typography sx={{ paddingTop: "5px" }}>{v.name}</Typography>
              );
            })}
            {/* </Grid> */}
          </>
        );
      })}
    </Container>
  );
};
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const serviceMenu = useRef();
  const serviceButton = useRef();
  const serviceMenuS = useRef();
  const serviceButtonS = useRef();
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const handleServicesClick = () => {
    serviceMenu.current.hidden = !serviceMenu.current.hidden;
    serviceMenuS.current.hidden = !serviceMenuS.current.hidden;
    if (!serviceMenu.current.hidden) {
      serviceButton.current.classList.add("active");
      serviceButtonS.current.classList.add("active");
    } else {
      serviceButton.current.classList.remove("active");
      serviceButtonS.current.classList.remove("active");
    }
    document.querySelectorAll("a.mobile-service-button").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelectorAll("a.button-header").forEach((item) => {
      item.classList.remove("active");
    });
  };

  const drawer = (
    <Box
      // onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <ul className="mobile-navigation">
        {pages.map((item) => {
          if (item.name != "Services") {
            return (
              <li>
                <NavLink
                  activeClassName="active"
                  className={"mobile-service-button"}
                  to={item.link}
                  onClick={() => {
                    serviceButton.current.classList.remove("active");
                    serviceButtonS.current.classList.remove("active");
                    serviceMenu.current.hidden = true;
                    serviceMenuS.current.hidden = true;
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          } else {
            return (
              <li>
                <Anchor
                  onClick={handleServicesClick}
                  ref={serviceButtonS}
                  to="#"
                >
                  Services
                </Anchor>
                <Container
                  hidden
                  id="service-menu-s"
                  ref={serviceMenuS}
                  className="smallservice"
                >
                  {returnServicesMenu()}
                </Container>
              </li>
            );
          }
        })}
        {/* <li>
          <NavLink to={"/our-team"}>Our Team</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li> */}
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
            <NavLink to={"/"} color={"goldenrod"} variant="h6" component="div">
              <img src={MiniLogo} alt="logo" height="50" width="50" />
            </NavLink>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              {pages.map((page) => {
                if (page.name != "Services") {
                  return (
                    <NavLink
                      activeClassName={"active"}
                      className={"button-header"}
                      to={page.link}
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        serviceMenu.current.hidden = true;
                        serviceMenuS.current.hidden = true;
                        serviceButton.current.classList.remove("active");
                        serviceButtonS.current.classList.remove("active");
                      }}
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
                } else {
                  return (
                    <Anchor
                      activeClassName={"active"}
                      className={"button-header"}
                      style={{ textDecoration: "none" }}
                      onClick={handleServicesClick}
                      href="/#"

                    >
                      <Button
                        ref={serviceButton}
                        key={page.name}
                        sx={{
                          my: 2,
                          display: "block",
                          color: "inherit",
                        }}
                      >
                        {page.name}
                      </Button>
                    </Anchor>
                  );
                }
              })}
            </Box>
            <NavLink to={"/contact-us"} style={{ textDecoration: "none" }}>
              <Button id="headerbutton">Contact</Button>
            </NavLink>
          </Toolbar>
        </Container>
      </AppBar>

      <Container  ref={serviceMenu} className="service-dropdown" hidden>
        <Typography
          variant="h5"
          sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "19px" }}
        >
          SERVICES
        </Typography>
        {returnServicesMenu()}
      </Container>

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
