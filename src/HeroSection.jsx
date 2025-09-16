import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import heroBg from "./assets/heroBg.jpg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "#fff",
        px: 2,
        mx: 0,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          }}
        >
          Transform Your Business Today
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            mb: 4,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          }}
        >
          Discover how our solutions help you grow efficiently and achieve
          success faster.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Book a Demo
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
