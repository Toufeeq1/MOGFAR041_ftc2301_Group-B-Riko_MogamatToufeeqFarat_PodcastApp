// Import necessary components and libraries
import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIconImport from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from '@mui/system';
import PropTypes from 'prop-types';

// Define a styled component for the background container
const BackgroundContainer = styled('div')({
  background: 'url("/a_more_colorful_aurora_borealis__northern_lights__by_aiartbysurya_dfkr6bh.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
});

// Define a styled component for the content container
const ContentContainer = styled('div')({
  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  padding: '16px', 
  borderRadius: '4px',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  width: '100%', 
});

// Create a default theme using MUI's createTheme function
const defaultTheme = createTheme();
const LockOutlinedIcon =
  LockOutlinedIconImport?.default ?? LockOutlinedIconImport;

// Define the LoginPage component
function LoginPage({ setToken }) {
  const VALID_USERNAME = "toufeeq";
  const VALID_PASSWORD = "latais";
  let navigate = useNavigate();

  // State to store form data
  const [FormData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  // Function to handle form input changes
  const handleChange = (event) => {
    event.preventDefault();
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidUser =
      FormData.username.trim() === VALID_USERNAME &&
      FormData.password === VALID_PASSWORD;

    if (isValidUser) {
      setToken({
        username: VALID_USERNAME,
        authenticatedAt: new Date().toISOString(),
      });
      navigate("/Home");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    // Background container
    <BackgroundContainer>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* Content container */}
        <ContentContainer>
          {/* Theme provider for styling */}
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={handleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    name="submit"
                  >
                    Sign In
                  </Button>
                  <Typography variant="body2" color="text.secondary">
                    Use username: <strong>toufeeq</strong> and password: <strong>latais</strong>
                  </Typography>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </ContentContainer>
      </Container>
    </BackgroundContainer>
  );
}

// Define PropTypes for the component
LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginPage; // Export the LoginPage component
