import { Link, useNavigate } from "react-router-dom";
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
import React from "react";
import { supabase } from "./client";
import PropTypes from 'prop-types';

// Create a default theme using MUI's createTheme function
const defaultTheme = createTheme();

// Define the LoginPage component
function LoginPage({ setToken }) {
  let navigate = useNavigate();

  // State to store form data
  const [FormData, setFormData] = React.useState({
    email: "",
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Sign in using Supabase auth
      const { data, error } = await supabase.auth.signInWithPassword({
        email: FormData.email,
        password: FormData.password,
      });

      if (error) throw error;
      console.log(data);
      setToken(data);
      navigate("/Home");
    } catch (error) {
      alert(error.message); // Display error message
    }
  };

  return (
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <Grid container>
              <Grid item>
                {/* Link to the SignUp page */}
                <Link to="/SignUp" variant="body2">
                  {"Don't have an account? Sign up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginPage; // Export the LoginPage component
