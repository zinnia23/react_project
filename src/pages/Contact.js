import React from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import { Typography } from "@mui/material";
import Image from '../images/contact.jpg'
import Form from '../components/contactform'
import Location from '../components/locations'
import Bg from '../images/contactformbg.jpg'
import email from '../images/email.png'
import "../styles/About.css";

const details = [
  {
      img: Bg,
      title: 'Contact Hash Technologies',
      desc: "We appreciate your interest in Hash Technologies. Please fill out the form below to get in touch with us.",
      color:"black",
    },
]
const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <>
       <div className="home" id="contact-image" >
          <Typography align="center" sx={{fontFamily: `'Ubuntu', sans-serif`}}>
            <h1 className="text-light" style={{fontSize: "65px"}}>We'd love to</h1>
            <h1 style={{fontSize: "65px", color:"#17a2b8"}}>Hear from you!</h1>
          </Typography>
        </div>
        <Form details={details}/>
        <Location/>
        <Typography pb={5} variant="h5" align="center" sx={{fontFamily: `'Ubuntu', sans-serif`}}>
          <img src={email} width="32px"></img>
          Info@hashtechnologiesllc.com</Typography>
    </>
  );
};

export default Contact;
