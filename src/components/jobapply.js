import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/HomeStyles.css";
import { Box, Container, Typography, Button, Grid, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import JobTypeIcon from "@mui/icons-material/CompassCalibration";
import CustomPopup from "./CustomPopup"; // Import your custom popup component

const Jobform = () => {
  const history = useNavigate(); // React Router's useHistory hook
  const { id } = useParams(); // Extract ID from the URL

  const [jobData, setJobData] = useState(null);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    linkedin_profile: "",
    website: "",
    cover_letter: "",
    cv: null,
  });

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOpenPopup = (message) => {
    setPopupMessage(message);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    history("/jobs");
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const formDataToSend = new FormData();
      formDataToSend.append("fullname", formData.fullname);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("linkedin_profile", formData.linkedin_profile);
      formDataToSend.append("website", formData.website);
      formDataToSend.append("cover_letter", formData.cover_letter);
      formDataToSend.append("cv", formData.cv);
      formDataToSend.append("title", jobData.title); // Use jobData.title

      const response = await fetch("http://127.0.0.1:8000/api/careers/", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Form submitted successfully");
      handleOpenPopup("Your application has been submitted successfully!");

      // Redirect to the jobs.js page after successful submission
    } catch (error) {
      console.error("There was a problem with the submission:", error.message);
      handleOpenPopup("http://127.0.0.1:8000/mitting application");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCvUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      cv: file,
    }));
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleApplyNowClick = () => {
    formContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const fileInputRef = useRef(null);
  const formContainerRef = useRef(null);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/jobs/");
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const data = await response.json();
        const jobWithId = data.find(job => job.id === parseInt(id));
        if (!jobWithId) {
          throw new Error("Job with the given ID not found");
        }
        setJobData(jobWithId);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, [id]);

  return (
    <div style={{ backgroundImage: `url(${jobData?.img})`, padding: "20px" }}>
      <Container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          padding: { xs: "30px", md: "30px 80px" },
        }}
      >
        <Button
          onClick={handleApplyNowClick}
          sx={{ float: "right", mt: 2 }}
          variant="contained"
        >
          Apply Now
        </Button>
        <Typography
          align="left"
          color={jobData?.color}
          pb={4}
          sx={{
            fontFamily: `'Ubuntu', sans-serif`,
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          {jobData?.title}
        </Typography>
        <Typography
          align="left"
          color={jobData?.color}
          paragraph
          sx={{ fontSize: "27px", display: "flex", alignItems: "center" }}
        >
          <LocationOnIcon sx={{ mr: 1 }} />
          {jobData?.location}
          <WorkIcon sx={{ mr: 1, ml: 2 }} />
          {jobData?.experience_required} Years
          <JobTypeIcon sx={{ mr: 1, ml: 2 }} />
          {jobData?.job_type} 
        </Typography>
        <Box p={2} sx={{ backgroundColor: "white" }}>
          <Typography
            paragraph
            sx={{ fontSize: "20px" }}
            dangerouslySetInnerHTML={{ __html: jobData?.job_description }}
          />
        </Box>

        <Container
          ref={formContainerRef}
          sx={{ backgroundColor: "white", padding: "20px", height: "100%" }}
        >
          <Typography
            align="left"
            color={jobData?.color}
            pb={4}
            sx={{
              fontFamily: `'Ubuntu', sans-serif`,
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Apply for this job
          </Typography>
          <Grid container spacing={2} pb={3}>
            <Grid item xs={12} md={4}>
              <TextField
                required
                fullWidth
                label="Name"
                placeholder="Enter Name"
                value={formData.fullname}
                onChange={handleInputChange}
                id="fullname"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                required
                fullWidth
                label="Email"
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
                label={formData.cv ? formData.cv.name : "CV (PDF, DOC, DOCX)"}
                onClick={handleChooseFile}
                placeholder="File Has been Selected"
                id="cv"
                InputProps={{
                  readOnly: true,
                }}
              />

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf, .doc, .docx"
                onChange={handleCvUpload}
                style={{ display: "none" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} pb={3}>
            <Grid item xs={12} md={4}>
              <TextField
                required
                fullWidth
                label="Linkedin Profile URL"
                placeholder="Enter Linkedin Profile URL"
                value={formData.linkedin_profile}
                onChange={handleInputChange}
                id="linkedin_profile"
              />
            </Grid>
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
                label="Contact Number"
                placeholder="Enter Contact Number"
                value={formData.phone}
                onChange={handleInputChange}
                id="phone"
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            pb={5}
            label="Cover Letter"
            placeholder="Enter Your Message"
            value={formData.cover_letter}
            onChange={handleInputChange}
            id="cover_letter"
          />
          <Button
            onClick={handleSubmit}
            sx={{ float: "right", mt: 2 }}
            variant="contained"
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </Container>
      </Container>

      {/* Custom Popup */}
      <CustomPopup
        isOpen={popupOpen}
        onClose={handleClosePopup}
        message={popupMessage}
      />
    </div>
  );
};

export default Jobform;
