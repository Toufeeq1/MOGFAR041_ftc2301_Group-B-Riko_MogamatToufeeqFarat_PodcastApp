
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";

import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

// Define the ImageCarousel component
const ImageCarousel = ({ slides }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const maxSteps = slides.length;

  // Function to handle advancing to the next slide
  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  React.useEffect(() => {
    if (maxSteps === 0) {
      setActiveStep(0);
      return;
    }
    if (activeStep >= maxSteps) {
      setActiveStep(0);
    }
  }, [activeStep, maxSteps]);

  // Start the auto-advancing timer when the component mounts
  React.useEffect(() => {
    if (maxSteps < 2) {
      return undefined;
    }
    const interval = setInterval(handleNext, 5000); // Adjust the interval time here (in milliseconds)
    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [maxSteps]);

  // Function to handle going back to the previous slide
  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  if (maxSteps === 0) {
    return null;
  }

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
        loading="eager"
        decoding="async"
      />
      <MobileStepper
        variant={isSmallScreen ? "progress" : "text"}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>
        }
      />
      <Typography align="center" mt={2}>
        {slides[activeStep].label}
      </Typography>
    </Box>
  );
};

// Define prop types for the ImageCarousel component
ImageCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired,
};

export default ImageCarousel; // Export the ImageCarousel component
