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
      width: "500px",
      height: "200px",
      position: "relative",
      marginTop: "20px",
      border: "2px",
      cursor: "pointer",
      transition: "background-color 0.3s, cursor 0.3s", 
    }}
  >
    <CardContent style={{ position: "absolute", top: 10, left: 0, width: "100%" }}>
      <Button
        sx={{ float: "right" }}
        variant="contained"
        onClick={onApplyNowClick}
      >
        Apply Now
      </Button>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
    </CardContent>
    <CardContent
      style={{
        position: "absolute",
        bottom: 15,
        left: 0,
        display: "flex",
        alignItems: "center",
        width: "50%",
      }}
    >
      <RoomIcon fontSize="small" style={{ marginRight: "5px", verticalAlign: "middle" }} />
      <Typography color="text.secondary" fontSize={25}>
        {location}
      </Typography>
    </CardContent>
    <CardContent
      style={{
        position: "absolute",
        bottom: 10,
        right: 0,
        display: "flex",
        alignItems: "center",
        width: "50%",
      }}
    >
      <WorkIcon fontSize="small" style={{ marginRight: "5px", verticalAlign: "middle" }} />
      <Typography color="text.secondary" style={{ textAlign: "right", fontSize: 25 }}>
        {experience_required} Years
      </Typography>
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
    console.log(job)
    localStorage.setItem('selectedJob', JSON.stringify(job));
    navigate("/apply", { state: { selectedJob: job } });
   
  };

  return (
    <>
      <div id="image-careers" className="home" style={{ marginBottom: "50px" }}>
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

      <Typography
        variant="h2"
        align="center"
        style={{
          fontFamily: `'Ubuntu', sans-serif`,
          fontWeight: "bold",
          fontSize: "28px",
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
          marginLeft: "200px",
          marginRight: "200px",
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
