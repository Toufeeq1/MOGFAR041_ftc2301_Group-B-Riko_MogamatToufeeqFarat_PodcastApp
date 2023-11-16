// Import necessary components and libraries
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from '@mui/system';
import { supabase } from "./client";

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

// Create a default Material-UI theme
const defaultTheme = createTheme();

// Define the SignUpPage component
function SignUpPage() {
  // State to store form data
  const [FormData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  // Event handler to update form data when input changes
  const handleChange = (event) => {
    event.preventDefault();
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  // Event handler to submit the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: FormData.email,
        password: FormData.password,
      });

      // Handle success or error after sign up
      if (data) {
        alert("Check your email for verification link");
      } else if (error) {
        alert(error.message);
      }
    } catch (error) {
      alert(error.message);
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
                  Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  {/* Email input */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                  />
                  {/* Password input */}
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

                  {/* Submit button */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    name="submit"
                  >
                    Sign Up
                  </Button>
                  {/* Already have an account? Login link */}
                  <Grid container>
                    <Grid item>
                      <Link to="LoginPage" variant="body2">
                        {"Already have an account? Login"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </ContentContainer>
      </Container>
    </BackgroundContainer>
  );
}

// Export the SignUpPage component
export default SignUpPage;


