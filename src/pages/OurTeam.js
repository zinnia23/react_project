import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import "../styles/About.css";
import { Container, Box, Typography, Tabs, Tab } from "@mui/material";
import Managment from "../components/managment";
import Avatar1 from "../images/avatar (1).svg";
import Avatar2 from "../images/avatar (2).svg";
import Avatar3 from "../images/avatar (3).svg";
import Avatar4 from "../images/avatar.svg";

var data1 = [
  {
    id: 1,
    img: Avatar1,
    name: "Adnan",
    text: "USA",
  },
  {
    id: 2,
    img: Avatar2,
    name: "Ali",
    text: "CO Founder",
  },
  {
    id: 3,
    img: Avatar3,
    name: "Sara",
    text: "CTO",
  },
  {
    id: 4,
    img: Avatar4,
    name: "Amina",
    text: "CFO",
  },
];

var data2 = [

];

var data3 = [
  {
    id: 1,
    img: Avatar1,
    name: "Management",
    text: "Director",
  },
  {
    id: 2,
    img: Avatar2,
    name: "Ali",
    text: "Director Testing",
  },
  {
    id: 3,
    img: Avatar3,
    name: "Bhumi",
    text: "Associate Director",
  },
];

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#17a2b8",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontFamily: `'Ubuntu', sans-serif`,
    fontSize: "24px",
    marginRight: "20px",
    color: "#17a2b8",
    "&.Mui-selected": {
      color: "black",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Ourteam = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/employees/")
      .then(response => response.json())
      .then(data => {
        console.log("-----------------------------------------");
        data1 = [];
        data2 = [];
        data3 = [];
        for (var i=0 ; i < data.length ; i++){
          var e_type = data[i]['employee_type']
          if (e_type === "India"){
            console.log("indian")
            const newData = {
              id: i+1,
              img: data[i]['image'],
              name: data[i]['name'],
              text: data[i]['designation'],
              desc: data[i]['intro'],
              linked : data[i]['linkedin_profile']
            };
            data2.push(newData);
            
          }
          else if (e_type === "US"){
            console.log("amreeka")
            const newData = {
              id: i+1,
              img: data[i]['image'],
              name: data[i]['name'],
              text: data[i]['designation'],
              desc: data[i]['intro'],
              linked : data[i]['linkedin_profile']
            };
            data1.push(newData);
          }
          else if (e_type === "Management"){
            console.log("management")
            const newData = {
              id: i+1,
              img: data[i]['image'],
              name: data[i]['name'],
              text: data[i]['designation'],
              desc: data[i]['intro'],
              linked : data[i]['linkedin_profile']
            };
            data3.push(newData);
          }
          
        }
        console.log("---------------------------------------");

      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });

    window.scroll(0, 0);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div id="image-team" className="home" style={{ marginBottom: "50px" }}>
        <Typography
          variant="h1"
          align="center"
          className="text-light"
          sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "65px" }}
        >
          Bringing Out the Best
        </Typography>
        <Typography
          variant="h1"
          align="center"
          style={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "65px", color: "#17a2b8" }}
        >
          in Each Other!
        </Typography>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <StyledTab label="USA" {...a11yProps(0)} />
            <StyledTab label="India" {...a11yProps(1)} />
            <StyledTab label="Management" {...a11yProps(2)} />
          </StyledTabs>
        </Box>
        <Container>
          <CustomTabPanel value={value} index={0} sx={{ color: "black" }}>
            <Managment details={data1} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} id="tabheading">
            <Managment details={data2} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2} id="tabheading">
            <Managment details={data3} />
          </CustomTabPanel>
        </Container>
      </Box>
    </>
  );
};

export default Ourteam;
