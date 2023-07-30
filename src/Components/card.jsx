// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Dialogs from './dialog';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

const CardSetUp = () => {

  const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        // Fetch data from the given URL endpoint using the fetch API
        fetch("https://podcast-api.netlify.app/")
            .then(res => res.json()) // Convert the response to JSON format
            .then(data => setCards(data)) // Update the 'card' state with the fetched data
            

             
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const genreMap = {
      1: "Personal Growth",
      2: "True Crime and Investigative Journalism",
      3: "History",
      4: "Comedy",
      5: "Entertainment",
      6: "Business",
      7: "Fiction",
      8: "News",
      9: "Kids and Family",
    };
  

    function formatGenres(genreIds) {
      return genreIds.map(genreId => genreMap[genreId]).join(', ');
    }

    

    function formatTime(timeString) {
      const updateTime = new Date(timeString);
      return updateTime.toLocaleString('en-US', {
        dateStyle: 'medium',
      });
    }



    
    // Format the "updated" field for each show
    cards.forEach(show => {
      show.updated = formatTime(show.updated);
    });
    console.log(cards.genres)
    
    console.log(cards);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '100%',
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                    </Typography>
                    <Typography  component="h2">
                    Genres: {formatGenres(card.genres)}
                    </Typography>
                    <Typography  component="h2">
                    Seasons: {card.seasons}

                    </Typography>
                    <Typography  component="h2">
                    Updated:{card.updated}

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Dialogs 
                    
                    cardid={card.id}
                    cardimage={card.image}
                    cardtitle={card.title}
                    carddescription={card.description}
                    cardseasons={card.seasons}
                    cardgenres={formatGenres(card.genres)}
                    cardupdated={card.updated}
                    
                     /> 
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      </Box>
      <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          <div> Icon made by <a href="" title="Reion"> Reion </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </Typography>
    </ThemeProvider>
  );
}
export default CardSetUp;