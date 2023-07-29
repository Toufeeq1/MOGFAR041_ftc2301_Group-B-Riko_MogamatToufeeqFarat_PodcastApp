import {Link, useNavigate} from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { supabase } from './client';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const defaultTheme = createTheme();


 // eslint-disable-next-line react/prop-types
 function LoginPage({setToken} ) {
let navigate = useNavigate()

  const [FormData, setFormData] = React.useState({
    email:'',
    password:'',
    
  })

  console.log(FormData)
  const handleChange = (event) => {
    event.preventDefault();
    setFormData((prevFormData) => {
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    }

    )
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  const handleSubmit = async (event) =>{
    event.preventDefault()
    try {
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await supabase.auth.signInWithPassword({
        email: FormData.email,
        password: FormData.password,
      })

      if (error) throw error
      console.log( data)
      setToken(data)
      navigate('/Home')
      // alert("check you email for varification link")
    } catch (error) {
      alert(error)
    }
  }

  return (
   
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
                <Link to='/SignUp' variant="body2">
                  {"Dont have a Account? Sign up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage
