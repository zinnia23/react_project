import React, { useState } from "react";
import "../styles/HomeStyles.css";
import { toast } from "react-toastify";
import { Container, Typography, Button, Grid, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CustomPopup from "./CustomPopup"; // Import your custom popup component



const Contactform = ({ details }) => {
  const { img, title, desc, color } = details;

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    jobTitle: "",
    email: "",
    city: "",
    country: "",
    website: "",
    howDidYouHear: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleOpenPopup = (message) => {
    setPopupMessage(message);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/tickets/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        handleOpenPopup("Your Ticket Has been generated");
        setFormData({
          name: "",
          company: "",
          jobTitle: "",
          email: "",
          city: "",
          country: "",
          website: "",
          howDidYouHear: "",
          message: "",
        });
      } else {
        console.error("Error submitting form:", response.statusText);
        handleOpenPopup("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      handleOpenPopup("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(`Setting ${id} to ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div style={{ backgroundImage: `url(${img})`, padding: "20px" }}>
      <Container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          padding: { xs: "0px", md: "30px 80px" },
        }}
      >
        <Typography
          align="center"
          color={color}
          pb={4}
          sx={{
            fontFamily: `'Ubuntu', sans-serif`,
            fontSize: "35px",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <Typography
          align="justify"
          paragraph
          color={color}
          pb={2}
          sx={{ fontSize: "20px" }}
        >
          {desc}
        </Typography>
        <Container
          sx={{ backgroundColor: "white", paddingBottom: "70px", height: "100%" }}
        >
          <Grid container spacing={2} pb={3}>
            <Grid item xs={12} md={4}>
              <TextField
                required
                fullWidth
                label="Name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleInputChange}
                id="name"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                required
                fullWidth
                label="Company"
                placeholder="Enter Company"
                value={formData.company}
                onChange={handleInputChange}
                id="company"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                required
                fullWidth
                label="Job Title"
                placeholder="Enter Job Title"
                value={formData.jobTitle}
                onChange={handleInputChange}
                id="jobTitle"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} pb={3}>
            <Grid item xs={12} md={4}>
              <TextField
                required
                fullWidth
                label="Work Email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
                id="email"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                required
                fullWidth
                label="City"
                placeholder="Enter City"
                value={formData.city}
                onChange={handleInputChange}
                id="city"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                required
                fullWidth
                label="Country"
                placeholder="Enter Country"
                value={formData.country}
                onChange={handleInputChange}
                id="country"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} pb={3}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Website"
                placeholder="Enter Website"
                value={formData.website}
                onChange={handleInputChange}
                id="website"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                required
                fullWidth
                label="How Did You Hear About Us"
                placeholder=""
                value={formData.howDidYouHear}
                onChange={handleInputChange}
                id="howDidYouHear"
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            pb={5}
            label="Message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleInputChange}
            id="message"
          />
          <Button
            sx={{ float: "right", mt: 2 }}
            variant="contained"
            onClick={handleSubmit}
            disabled={loading} // Disable the button while loading

          >
             {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Submit"
            )}
          </Button>

          <CustomPopup
          isOpen={popupOpen}
          onClose={handleClosePopup}
          message={popupMessage}
        />
        </Container>
      </Container>
    </div>
  );
};

export default Contactform;
