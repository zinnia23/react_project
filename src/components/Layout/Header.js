import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Button,
  Toolbar,
  Typography,
  List,
} from "@mui/material";
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
      <Typography
        variant="h5"
        sx={{
          "@media (max-width: 900px)": {
            display: "none",
          },
          fontFamily: `'Ubuntu', sans-serif`,
          fontSize: "19px",
          width: "100%",
        }}
      >
        SERVICES
      </Typography>
      <Box
        width={"100%"}
        sx={{
          "@media (min-width: 900px)": {
            // Example: for medium screens and above (768px and higher)
            flexDirection: "column",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "space-between",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100%",
          },
        }}
      >
        {Object.keys(listofservices).map((heading) => {
          return (
            <>
              <Typography
                className="text"
                sx={{
                  fontFamily: `'Ubuntu', sans-serif !important`,
                  color: "rgb(54 177 191) !important",
                  padding: "8px 0",
                }}
                width={{ sm: "100%", md: "30%" }}
              >
                {heading}
              </Typography>
              {listofservices[heading].map((v) => {
                return (
                  <Typography sx={{ padding: "12px 0" }}>{v.name}</Typography>
                );
              })}
            </>
          );
        })}
      </Box>
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
  const useOutsideClickAlerter = (ref, buttonRef) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          !buttonRef.current.contains(event.target)
        ) {
          serviceMenu.current.hidden = true;
        }
      }

      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref, buttonRef]);
  };
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const serviceMenu = useRef();
  const navbarRef = useRef();
  useScrollAlerter(navbarRef);
  const serviceButton = useRef();
  useOutsideClickAlerter(serviceMenu, serviceButton);
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
    <Box sx={{ textAlign: "center" }}>
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
                  className={"drop-down"}
                >
                  Services
                </Anchor>
                <Box
                  hidden
                  id="service-menu-s"
                  ref={serviceMenuS}
                  className="smallservice"
                >
                  {returnServicesMenu()}
                </Box>
              </li>
            );
          }
        })}
        <Button
          to={"/contact-us"}
          class="btn btn-primary"
          onClick={() => {
            navigate("/contact-us");
          }}
          style={{ float: "left", margin: "6px 0" }}
        >
          Contact
        </Button>
      </ul>
    </Box>
  );

  return (
    <Box>
      <Box sx={{}}>
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
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
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
                            ref={serviceButton}
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
                  {/* <li> */}

                  {/* </li> */}
                </ul>
                <Button
                  to={"/contact-us"}
                  class="btn btn-primary"
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                  style={{ float: "right" }}
                >
                  Contact
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Container ref={serviceMenu} className="service-dropdown" hidden>
          {returnServicesMenu()}
        </Container>
      </Box>

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
              top: "13%",
              backgroundColor: "black",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
export default Header;
