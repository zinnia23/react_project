import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MiniLogo from "../../images/minilogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import { Anchor } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import im from "../../images/aboutbg.jpg";
import { DataContext, useData } from "../../DataContext";


const pages = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Services", link: "" },
  { id: 3, name: "Our Team", link: "/our-team" },
  { id: 4, name: "About", link: "/about" },
  { id: 4, name: "Careers", link: "/jobs" },
];

const Header = () => {
  const [listofservices, setListofservices] = useState({
    "Application Development & Maintenance": [],
  });

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/services/");
      if (response.ok) {
        const data = await response.json();
        const newData = data.map((item, index) => ({
          id: index + 1,
          name: item.name,
          link: "/services",
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
  const useScrollAlerter = (ref) => {
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleServicesClick = () => {
    serviceMenu.current.hidden = !serviceMenu.current.hidden;
    serviceMenuS.current.hidden = !serviceMenuS.current.hidden;

  };
  const { updateData } = useData();
  const sendData = (v) => {
    updateData(v);
  };

  const returnServicesMenu = () => {
    const servicesPerColumn = 7;
    const services = listofservices["Application Development & Maintenance"];
    const columnsCount = Math.ceil(services.length / servicesPerColumn);
  
    return (
      <Box className="smallscreen">
        <Typography
          variant="h5"
          sx={{
            "@media (max-width: 900px)": {
              display: "none",
            },
            fontFamily: `'Ubuntu', sans-serif`,
            fontSize: "19px",
            width: "100%",
            height: "10%",
          }}
        >
          SERVICES
        </Typography>
        <Box
          width={"100%"}
          sx={{
            "@media (min-width: 900px)": {
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            },
          }}
        >
          {Array.from({ length: columnsCount }).map((_, columnIndex) => (
            <Box
              key={`column-${columnIndex}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                alignContent: "flex-start",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography
                className="text"
                sx={{
                  fontFamily: `'Ubuntu', sans-serif !important`,
                  color: "rgb(54 177 191) !important",
                  padding: "8px 0",
                }}
                width={{ sm: "100%", md: "30%" }}
              >
                {services[columnIndex * servicesPerColumn]?.category || ''}
              </Typography>
              {services
                .slice(
                  columnIndex * servicesPerColumn,
                  (columnIndex + 1) * servicesPerColumn
                )
                .map((v) => (
                  <NavLink
                    key={v.id}
                    id="navlink"
                    className="anchorstyle"
                    to={v.link}
                    onClick={() => {
                      sendData(v);
                      handleServicesClick();
                    }}
                  >
                    {v.name}
                  </NavLink>
                ))}
            </Box>
          ))}
        </Box>
      </Box>
    );
  };
  
  

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <ul className="mobile-navigation">
        {pages.map((item, num) => {
          if (item.name !== "Services") {
            return (
              <li key={window.crypto.randomUUID()}>
                <NavLink
                  key={item.id}
                  className={"active mobile-service-button"}
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
              <li key={window.crypto.randomUUID()}>
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
          className="btn btn-primary"
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
          <Container maxwidth="xl">
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
                  {pages.map((page, num) => {
                    if (page.name !== "Services") {
                      return (
                        <li
                          className="header-items"
                          key={window.crypto.randomUUID()}
                        >
                          <NavLink
                            key={page.id}
                            activeclassname={"active"}
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
                        <li
                          className="header-items"
                          key={window.crypto.randomUUID()}
                        >
                          <Anchor
                            ref={serviceButton}
                            activeclassname={"active"}
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
                <Button
                  to={"/contact-us"}
                  className="btn btn-primary"
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
