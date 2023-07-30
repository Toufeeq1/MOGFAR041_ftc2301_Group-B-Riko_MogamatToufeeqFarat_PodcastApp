import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Dialogs from './dialog';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const CardSetUp = () => {
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); // Added loading state

  React.useEffect(() => {
    fetch("https://podcast-api.netlify.app/")
      .then(res => res.json())
      .then(data => {
        setCards(data);
        setIsLoading(false); // Data has been loaded, set loading state to false
      })
      .catch(error => console.error(error));
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
     
      <main>
        {isLoading ? ( // Check if data is still loading
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Typography variant="h5" color="text.primary">
              Loading...
            </Typography>
          </Box>
        ) : (
          // Render the actual content once data is loaded
          <>
            {/* Hero unit */}
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
             
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="div"
                        sx={{
                          pt: '100%',
                          display: 'block', // Initially set display to block
                          visibility: 'hidden',
                        }}
                        image={card.image}
                        onLoad={() => setIsLoading(false)} 
                        style={{ visibility: 'visible' }} // Set imageLoading to false once the image has loaded
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.title}
                        </Typography>
                        <Typography component="h2">Genres: {formatGenres(card.genres)}</Typography>
                        <Typography component="h2">Seasons: {card.seasons}</Typography>
                        <Typography component="h2">Updated: {card.updated}</Typography>
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
          </>
        )}
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer"></Box>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        <div>
          Icon made by <a href=""> Reion </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
      </Typography>
    </ThemeProvider>
  );
};

export default CardSetUp;
