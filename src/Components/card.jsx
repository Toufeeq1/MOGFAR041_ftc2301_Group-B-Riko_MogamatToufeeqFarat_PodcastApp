// eslint-disable-next-line no-unused-vars
import * as React from 'react';

import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';




const defaultTheme = createTheme();

const CardSetUp = () => {

  const [cards, setCards] = React.useState([]);

    // Use the useEffect hook to perform an action on component mount or when 'card' state changes
    React.useEffect(() => {
        // Fetch data from the given URL endpoint using the fetch API
        fetch("https://podcast-api.netlify.app/")
            .then(res => res.json()) // Convert the response to JSON format
            .then(data => setCards(data)) // Update the 'card' state with the fetched data
             console.log(cards) // Uncomment this line to log the 'card' state (not recommended in production)
    }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
       
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((cards) => (
              <Grid item key={cards.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '100%',
                    }}
                    image={cards.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {cards.title}
                    </Typography>
                    <Typography>
                       {/* {cards.description}  */}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      </Box>
    </ThemeProvider>
  );
}
export default CardSetUp;