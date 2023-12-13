import React, { useEffect, useRef, useState, useContext } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import MiniLogo from "../../images/minilogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import { Anchor, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import im from "../../images/aboutbg.jpg";
import { DataContext, useData } from "../../DataContext";

const pages = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Services", link: "" },
  { id: 3, name: "Our Team", link: "/our-team" },
  { id: 4, name: "About", link: "/about" },
];
const listofservices = {
  "Application Development & Maintenance": [
    {
      id: 1,
      name: "Mobile Application Development",      
      link: "/services",
      desc: "hahdoadajdpaid",
      image: im,
    },
    { id: 2, name: "Custom Web Development", link: "/services" },
    { id: 3, name: "Product Discovery", link: "/services" },
    { id: 4, name: "DevOps as a Service", link: "/services" },
    { id: 5, name: "Salesforce Consulting", link: "/services" },
    { id: 6, name: "AWS Activate", link: "/services" },
  ],
  "Emerging Technologies": [
    { id: 7, name: "Artificial Intelligence", link: "/services" },
    { id: 8, name: "Blockchain", link: "/services" },
    { id: 9, name: "Internet of Things", link: "/services" },
    { id: 10, name: "Extended Reality", link: "/services" },
  ],
  "Creative": [
    { id: 11, name: "Prototyping", link: "/services" },
    { id: 12, name: "User Experience Design", link: "/services" },
  ],
  "Technologies": [
    { id: 13, name: "Python Development", link: "/services" },
    { id: 14, name: "React Native Development", link: "/services" },
    { id: 15, name: "ReactJS Development", link: "/services" },
    { id: 16, name: "PHP Development", link: "/services" },
    { id: 17, name: "Angular Development", link: "/services" },
    { id: 18, name: "Full Stack Developers", link: "/services" },
    { id: 19, name: "WordPress Development", link: "/services" },
  ],
};

const Header = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/services/");
        // Handle response as needed, e.g., parse JSON
        // You may also want to check for successful response status
        if (response.ok) {
          const data = await response.json();
          console.log("API Response:", data);
          // alert("API CALLED");
          listofservices["Application Development & Maintenance"] = []
          console.log(listofservices["Application Development & Maintenance"])
          // listofservices["Application Development & Maintenance"] = {}
          for (var i=0 ;i<data.length ;i++){
            var names = data[i]['name']
            const newData = {
              id: i+1,
              name: names,
              link : "/services",
              desc: data[i]['description'],
              img: data[i]['image'],
            };
            listofservices["Application Development & Maintenance"].push(newData);
            console.log("done")
          }
        } else {
          console.error("Failed to fetch data from the API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once on mount



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
  const { updateData } = useData();
  const sendData = (v) => {
    updateData(v);
  };

  const isLinkActive = () => {
    // Your custom logic to determine when the link should not be active
    return false; // Return false to prevent the active class
  };
  const returnServicesMenu = () => {
    // const handleServiceClick = (service) => {
    //   setSelectedService(service);
    // };
  
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
              <Box
                key={heading}
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
                  {heading}
                </Typography>
                {listofservices[heading].map((v) => {
                  return (
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
                  );
                })}
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <ul className="mobile-navigation">
        {pages.map((item, num) => {
          if (item.name != "Services") {
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
                    if (page.name != "Services") {
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
