import React, { useEffect, useRef, useState } from "react";
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
  List,
} from "@mui/material";
import Logo from "../../images/mainlogo.png";
import MiniLogo from "../../images/minilogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Router } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import { Anchor, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
                color: "rgb(54 177 191) !important",
              }}
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
  const useScrollAlerter = (ref) => {
    useEffect(() => {
      const handleScroll = (event) => {
        if (window.scrollY > 200) {
          // console.log(window.scrollY);
          navbarRef.current.style.backgroundColor = "rgb(0 0 0/100%)";
        } else {
          navbarRef.current.style.backgroundColor = "rgb(0 0 0/50%)";
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [ref]);
  };
  const useOutsideClickAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          serviceMenu.current.hidden = true;
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const serviceMenu = useRef();
  useOutsideClickAlerter(serviceMenu);
  const navbarRef = useRef();
  useScrollAlerter(navbarRef);
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
  };

  const drawer = (
    <Box
      sx={{ textAlign: "center" }}
    >
      <ul className="mobile-navigation">
        {pages.map((item) => {
          if (item.name != "Services") {
            return (
              <li>
                <NavLink
                  activeClassName="active"
                  key={item.name}
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
                  className="drop-down"

                  // to="#"
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
          {/* <NavLink  style={{ textDecoration: "none" }}> */}
          <Button
            to={"/contact-us"}
            className="btn btn-primary"
            onClick={() => {
              navigate("/contact-us");
            }}
          >
            Contact
          </Button>
          {/* </NavLink> */}
        </li>
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar
        component={"nav"}
        className="sticky-top"
        sx={{ bgcolor: "rgb(0 0 0/50%)", padding: "0 25px" }}
        ref={navbarRef}
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
            <NavLink
              className={"logo"}
              to={"/"}
              color={"goldenrod"}
              variant="h6"
              component="div"
            >
              <img src={MiniLogo} alt="logo" height="50" width="50" />
            </NavLink>
            <Box
              width={"100%"}
              sx={{ display: { xs: "none", md: "block" }, mr: 1 }}
            >
              <ul
                className="w-100"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 0,
                }}
              >
                {pages.map((page) => {
                  if (page.name != "Services") {
                    return (
                      <li className="header-items">
                        <NavLink
                          activeClassName={"active"}
                          className={"button-header"}
                          to={page.link}
                          style={{}}
                        >
                          {page.name}
                        </NavLink>
                      </li>
                    );
                  } else {
                    return (
                      <li className="header-items">
                        <Anchor
                          activeClassName={"active"}
                          onClick={handleServicesClick}
                          className={"button-header drop-down"}
                          style={{
                            textDecoration: "none",
                            my: 2,
                            display: "block",
                            color: "inherit",
                          }}
                        >
                          {page.name}
                        </Anchor>
                      </li>
                    );
                  }
                })}
              </ul>
            </Box>
            {/* <NavLink to={"/contact-us"} style={{ textDecoration: "none" }}> */}
            <Button
              to={"/contact-us"}
              className="btn btn-primary"
              onClick={() => {
                navigate("/contact-us");
              }}
              sx={{
                width: "9%",
              }}
            >
              Contact
            </Button>
            {/* </NavLink> */}
          </Toolbar>
        </Container>
      </AppBar>

      <Container ref={serviceMenu} className="service-dropdown" hidden>
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
