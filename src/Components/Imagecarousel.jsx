/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const ImageCarousel = ({ slides }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const maxSteps = slides.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  // Start the auto-advancing timer when the component mounts
  React.useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Adjust the interval time here (in milliseconds)
    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  return (
    <Box sx={{ justifyContent: "center", maxWidth: 400, flexGrow: 1 }}>
      {/* Make the image clickable and provide the link to the card's details page */}
      {/* <Link to={`/card/${slides[activeStep].id}`} style={{ textDecoration: 'none' }}></Link> */}
      <Box
        component="img"
        sx={{
          height: isSmallScreen ? 180 : 255,
          display: "block",
          maxWidth: 400,
          overflow: "hidden",
          width: "100%",
          cursor: "pointer", // Add a pointer cursor when hovering over the image
        }}
        src={slides[activeStep].image}
        alt={slides[activeStep].label}
      />
      <MobileStepper
        variant={isSmallScreen ? "progress" : "text"}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <KeyboardArrowRight
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          />
        }
        backButton={
          <KeyboardArrowLeft onClick={handleBack} disabled={activeStep === 0} />
        }
      />
      <Typography align="center" mt={2}>
        {slides[activeStep].label}
      </Typography>
    </Box>
  );
};

export default ImageCarousel;
