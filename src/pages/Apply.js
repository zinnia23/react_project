import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Form from "../components/jobapply";
import Location from "../components/locations";
import Bg from "../images/contactformbg.jpg";
import email from "../images/email.png";
import "../styles/About.css";

const Apply = () => {
  const [details, setDetails] = useState({
    img: Bg,
    title: "Python Developer",
    location: "India",
    experience_required: "3+",
    job_description:
      "We appreciate your interest in Hash Technologies. Please fill out the form below to get in touch with us.",
    color: "black",
  });

   // Access location state
   const { state } = useLocation();
   const appliedJobDetails = state?.selectedJob;
 
   useEffect(() => {
     // Retrieve from local storage
     const savedJob = localStorage.getItem('selectedJob');
     if (savedJob) {
       setDetails(JSON.parse(savedJob));
     }
   }, []);

  return (
    <>
      <div className="home" id="contact-image">
        <div align="center" sx={{ fontFamily: `'Ubuntu', sans-serif` }}>
          <h1 className="text-light" style={{ fontSize: "65px" }}>
            Work is Fun!
          </h1>
          <h1 style={{ fontSize: "65px", color: "#17a2b8" }}>At Hash Tech</h1>
        </div>
      </div>
      <Form details={details} />
      <Typography
        pb={5}
        variant="h5"
        align="center"
        sx={{ fontFamily: `'Ubuntu', sans-serif` }}
      >
        <img src={email} width="32px" alt="email-icon" />
        Info@hashtechnologiesllc.com
      </Typography>
    </>
  );
};

export default Apply;
