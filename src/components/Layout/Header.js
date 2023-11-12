import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/mainlogo.jpeg";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import { Container } from "react-bootstrap";

const pages = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Careers", link: "/careers" },
  { name: "Our Team", link: "/about" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
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
          <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li>
          <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>Our Team</NavLink>
        </li>
        <li>
          <NavLink to={"/contact-us"} style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#17a2b8",
                ml:"-10px"
              }}
            >
              Contact
            </Button>
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
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
            {/* <Navbar.Collapse id="navbarScroll" > */}
            {/* <Nav
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              navbarScroll
            > */}
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
              <img src={Logo} alt="logo" height={"50"} width="50" />
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              {pages.map((page) => {
                return (
                  <NavLink
                    activeClassName={"active"}
                    to={page.link}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      key={page.name}
                      // onClick={handleCloseNavMenu}
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
              <Button
                sx={{
                  ml: 2,
                  color: "white",
                  display: "block",
                  backgroundColor: "#17a2b8",
                }}
              >
                Contact
              </Button>
            </NavLink>
            {/* </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
