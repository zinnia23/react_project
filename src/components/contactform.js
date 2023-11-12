import React from "react";
import "../styles/HomeStyles.css";
import { Container, Typography, Button, Grid, TextField } from "@mui/material";



const Contactform = ({ details }) => {
  const { img, title, desc,color } = details[0];
  return (
    <div style={{ backgroundImage: `url(${img})`, padding: "20px" }}>
      <Container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          padding: "30px 80px",
        }}
      >
        <Typography
          align="center"
          color={color}
          pb={4}
          sx={{ fontFamily:  `'Ubuntu', sans-serif`,fontSize: "35px", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography
          align="justify"
          paragraph
          color={color}
          pb={4}
          sx={{fontSize: "20px" }}
        >
          {desc}
        </Typography>
        <Container sx={{ backgroundColor: "white", padding: "100px",height: "auto" }}>
          <Grid container spacing={2} pb={3}>
            <Grid item sm={12} md={4}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Name"
                placeholder="Enter Name"
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Company"
                placeholder="Enter Company"
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Job Title"
                placeholder="Enter Job Title"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} pb={3}>
            <Grid item sm={12} md={4}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Work Email"
                placeholder="Enter Email"
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="City"
                placeholder="Enter City"
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Country"
                placeholder="Enter Country"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} pb={3}>
            <Grid item sm={12} md={4}>
              <TextField
                fullWidth
                id="outlined-required"
                label="Website"
                placeholder="Enter Website"
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="How Did You Hear About Us"
                placeholder=""
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            pb={5}
            id="outlined-required"
            label="Message"
            placeholder="Enter Your Message"
          />
          <Button large sx={{float: "right", mt: 2}} variant="contained">Submit</Button>
        </Container>
      </Container>
    </div>
  );
};
export default Contactform;
