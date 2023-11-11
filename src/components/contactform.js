import React from "react";
import "../styles/HomeStyles.css";
import { Container, Typography, Button, Grid, TextField } from "@mui/material";
import background from "./../images/contactbg.jpg";

const Contactform = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, padding: "20px" }}>
      <Container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          padding: "80px",
        }}
      >
        <Typography
          align="center"
          color="white"
          pb={4}
          sx={{ fontSize: "35px", fontWeight: "bold" }}
        >
          We'd love to hear from you!
        </Typography>
        <Container sx={{ backgroundColor: "white", padding: "100px",height: "auto" }}>
          <Grid container spacing={2} pb={5}>
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
          <Grid container spacing={2} pb={5}>
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
          <Grid container spacing={2} pb={5}>
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
