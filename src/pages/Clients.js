import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Contact from "../components/contactform";
import ImageSlider from '../components/ImageSlider';

const Clients = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/client-colab/');
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
                        Check Out
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
                    <h2>Why are you Important to us?</h2>
                    <p>
                        Clients are important to us for several critical reasons. Firstly, they are the foundation of our business success, as their patronage directly contributes to our growth and sustainability. Building strong relationships with clients fosters trust, loyalty, and repeat business, which are vital for long-term success. Additionally, clients provide valuable feedback that helps us improve our products or services to better meet their needs. By prioritizing client satisfaction and understanding their goals, we can tailor our offerings and provide exceptional service, ultimately leading to mutual success and a positive reputation in the market. Therefore, our clients are not just customers but partners in our journey towards excellence.
                    </p>
                </Grid>
            </Container>

            <div>
                <h1 style={{ textAlign: "center" }}>Collaboration With Companies</h1>
                <br />
                {images.length > 0 && <ImageSlider images={images} />}
            </div>

            <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "44px", paddingTop: "3%", backgroundImage: "url('../images/email.png')", backgroundSize: "cover", backgroundPosition: "center center" }}>
                Feel Free To Contact Us

                <Contact details={[{
                    img: "http://127.0.0.1:8000/media/contactformbg_images/background2.jpg",
                    title: 'Contact Hash Technologies',
                    desc: "We appreciate your interest in Hash Technologies. Please fill out the form below to get in touch with us.",
                    color: "black",
                }]} />

            </div>
        </>
    );
};

export default Clients;
