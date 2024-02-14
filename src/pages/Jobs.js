import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Typography, Card, Button, CardContent } from "@mui/material";
import RoomIcon from '@mui/icons-material/Room';
import WorkIcon from '@mui/icons-material/Work';

const JobCard = ({ title, location, experience_required, className, onApplyNowClick }) => (
  <Card
    className={`job-card ${className}`}
    style={{
      maxWidth: "500px",
      margin: "20px auto",
      position: "relative",
      border: "2px solid #ccc",
      cursor: "pointer",
      transition: "background-color 0.3s, cursor 0.3s",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <CardContent style={{ padding: "20px" }}>
      <Button
        sx={{ float: "right" }}
        variant="contained"
        onClick={onApplyNowClick}
        style={{
          fontSize: "14px",
          paddingLeft: "8px", // Decreased button font size
          alignSelf: "flex-end",
        }}
      >
        Apply Now
      </Button>
      <Typography variant="h5" component="div" style={{ fontSize: "1.5rem" }}>
        {title}
      </Typography>
    </CardContent>
    <CardContent
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <RoomIcon fontSize="small" style={{ marginRight: "5px" }} />
        <Typography color="text.secondary" style={{ fontSize: "1rem" }}>
          {location}
        </Typography>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <WorkIcon fontSize="small" style={{ marginRight: "5px" }} />
        <Typography color="text.secondary" style={{ fontSize: "1rem" }}>
          {experience_required} Years
        </Typography>
      </div>
    </CardContent>
  </Card>
);


JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  experience_required: PropTypes.string.isRequired,
  className: PropTypes.string,
  onApplyNowClick: PropTypes.func.isRequired,
};

const Jobs = () => {
  const [jobOpenings, setJobOpenings] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/jobs");
        if (response.ok) {
          const data = await response.json();
          setJobOpenings(data);
        } else {
          console.error("Failed to fetch job openings");
        }
      } catch (error) {
        console.error("Error fetching job openings", error);
      }
    };

    fetchData();
  }, []);

  const handleApplyNowClick = (job) => {
    setSelectedJob(job);
    localStorage.setItem('selectedJob', JSON.stringify(job));
    navigate("/apply", { state: { selectedJob: job } });
  };

  return (
    <>


      <div id="image-careers" className="home" style={{ marginBottom: "0px" }}>
        <Typography
          variant="h1"
          align="center"
          className="text-light"
          sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "65px" }}
        >
          Hash Technologies
        </Typography>
        <Typography
          variant="h1"
          align="center"
          style={{
            fontFamily: `'Ubuntu', sans-serif`,
            fontSize: "65px",
            color: "#17a2b8",
          }}
        >
          Careers
        </Typography>
      </div>
      <div style={{ backgroundColor: "#17a2b8", color: "#fff", textAlign: "center", padding: "5% 5%" }}>
        <Typography variant="h3" component="div" style={{ fontWeight: "bold",  marginBottom: "20px",  paddingLeft: "15%", paddingRight: "15%" }}>
          Why Choose a Career with Hash Technologies?
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ flex: "1 1 300px", margin: "10px",  paddingLeft: "5%", paddingRight: "5%" }}>
            <Typography variant="h4" component="div" style={{ fontWeight: "bold" }}>
              Creativity and Freedom
            </Typography>
            <Typography variant="body1">
              We believe in giving our employees the creative space and freedom to explore, innovate, and excel in their roles.
            </Typography>
          </div>
          <div style={{ flex: "1 1 300px", margin: "10px",  paddingLeft: "5%", paddingRight: "5%" }}>
            <Typography variant="h4" component="div" style={{ fontWeight: "bold" }}>
              Diversity and Inclusion
            </Typography>
            <Typography variant="body1">
              Hash Technologies is committed to fostering an inclusive workplace where different cultures are celebrated, and diverse perspectives are valued.
            </Typography>
          </div>
          <div style={{ flex: "1 1 300px", margin: "10px",  paddingLeft: "5%", paddingRight: "5%" }}>
            <Typography variant="h4" component="div" style={{ fontWeight: "bold" }}>
              Collaboration and Efficiency
            </Typography>
            <Typography variant="body1">
              By bringing together a diverse team, we aim to combine strengths, inspire new ideas, and operate with maximum efficiency.
            </Typography>
          </div>

        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ flex: "1 1 300px", margin: "10px", paddingLeft: "10%", paddingRight: "10%" }}>
            <Typography variant="h4" component="div" style={{ fontWeight: "bold" }}>
              Career Development
            </Typography>
            <Typography variant="body1">
              We invest in the growth and development of our employees, providing opportunities for skill enhancement and career advancement.
            </Typography>
          </div>
          <div style={{ flex: "1 1 300px", margin: "10px", paddingLeft: "10%", paddingRight: "15%" }}>
            <Typography variant="h4" component="div" style={{ fontWeight: "bold" }}>
              Make a Difference
            </Typography>
            <Typography variant="body1">
              Join us in making a difference. At Hash Technologies, your contributions matter, and together, we can create transformative solutions.
            </Typography>
          </div>
        </div>
      </div>
      <Typography
        variant="h2"
        align="center"
        style={{
          fontFamily: `'Ubuntu', sans-serif`,
          fontWeight: "bold",
          fontSize: "38px",
          marginTop: "20px",

        }}
      >
        Join Us Today!
      </Typography>

      <Typography
        variant="body1"
        align="center"
        style={{
          fontSize: "16px",
          margin: "20px",
          paddingLeft: "10%",
          paddingRight: "10%"
        }}
      >
        If you resonate with our values and share the belief in creating a workplace where innovation thrives, ownership is nurtured, and collaboration is celebrated, we invite you to join us today. Let's make a difference together, and let your career shine at Hash Technologies. Explore exciting opportunities and be a part of our dynamic team where innovation meets excellence. Join us and be a catalyst for positive change in the world of technology and digital transformation.
      </Typography>

      <Typography
        variant="h2"
        align="center"
        style={{
          fontFamily: `'Ubuntu', sans-serif`,
          fontWeight: "bold",
          fontSize: "28px",
          marginTop: "40px",
        }}
      >
        CURRENT JOB OPENINGS
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "1px",
          marginTop: "20px",
          marginBottom: "40px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        {jobOpenings.map((job, index) => (
          <JobCard
            key={index}
            {...job}
            onApplyNowClick={() => handleApplyNowClick(job)}
          />
        ))}
      </div>
    </>
  );
};

export default Jobs;
