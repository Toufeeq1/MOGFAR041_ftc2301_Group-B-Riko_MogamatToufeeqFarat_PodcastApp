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
import React from "react";
import { supabase } from "./client";

// Create a default Material-UI theme
const defaultTheme = createTheme();

function SignUpPage() {
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
  
      // You can use the `data` or `error` variables here
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
              Sign In
            </Button>
            {/* Already have an account? Login link */}
            <Grid container>
              <Grid item>
                <Link to="/" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUpPage;

