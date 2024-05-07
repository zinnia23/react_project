import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Contact from "../components/contactform";
import ImageSlider from '../components/ImageSlider';

const Clients = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('https://hashtech.pythonanywhere.com/api/client-colab/');
                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                const formattedImages = data.map(item => ({
                    src: item.image,
                    url: item.url
                }));
                setImages(formattedImages);
            } catch (error) {
                console.error('Error fetching images:', error);
                // Optionally, handle the error state or display an error message
            }
        };

        fetchImages();
    }, []);

    return (
        <>
            <Box id="about-image2" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <div className="home" style={{ marginBottom: "50px" }}>
                    <Typography
                        variant="h1"
                        align="center"
                        className="text-light"
                        sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "65px", '@media (max-width: 600px)': { fontSize: "40px" } }}
                    >
                        Our Clients
                    </Typography>
                    <Typography
                        variant="h1"
                        align="center"
                        sx={{ fontFamily: `'Ubuntu', sans-serif`, fontSize: "65px", color: "#17a2b8", '@media (max-width: 600px)': { fontSize: "40px" } }}
                    >
                        Who we have worked with!
                    </Typography>
                </div>
            </Box>

            <Container>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        paddingTop: "5%"
                    }}
                >
                    <h2>Our Clients</h2>
                    <p>
                    At Hash Technologies LLC, our commitment lies in delivering innovative solutions that empower our clients to achieve their objectives consistently. We recognize the paramount significance of adhering to project timelines while maintaining the highest quality standards. Whether our clients require staffing solutions or comprehensive project management, we pride ourselves on not just meeting but exceeding their expectations. Our ethos revolves around unwavering dedication, relentless pursuit of excellence, and a steadfast focus on our clients' success. With every endeavor, we strive to set new benchmarks in the realm of technological solutions, ensuring that our clients always remain ahead of the curve.                    </p>
                </Grid>
            </Container>

            <div>
                {/* <h1 style={{ textAlign: "center" }}>Collaboration With Companies</h1>
                <br /> */}
                {images.length > 0 && <ImageSlider images={images} />}
            </div>

            <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "44px", paddingTop: "3%", backgroundImage: "url('../images/email.png')", backgroundSize: "cover", backgroundPosition: "center center" }}>
                Feel Free To Contact Us

                <Contact details={[{
                    img: "https://hashtech.pythonanywhere.com/media/contactformbg_images/background2.jpg",
                    title: 'Contact Hash Technologies',
                    desc: "We appreciate your interest in Hash Technologies. Please fill out the form below to get in touch with us.",
                    color: "black",
                }]} />

            </div>
        </>
    );
};

export default Clients;
