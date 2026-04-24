/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

// Import required React components and libraries
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Dialogs from "./dialog"; // Assuming this is a custom component
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import GroupSizesColors from "./tributton"; // Make sure to import the correct component name
import ImageCarousel from "./Imagecarousel"; // Assuming this is a custom component
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Create a default theme using MUI's createTheme
const defaultTheme = createTheme();
const INITIAL_VISIBLE_CARDS = 12;
const LOAD_MORE_COUNT = 12;
const FEATURED_CAROUSEL_SLIDES = 8;

// Define the main functional component
const CardSetUp = () => {
  // Set up states using React hooks
  const [cards, setCards] = React.useState([]); // State to hold podcast data
  const [isLoading, setIsLoading] = React.useState(true); // State to track loading status
  const [sortingOption, setSortingOption] = React.useState("A-Z"); // State for sorting options
  const [searchQuery, setSearchQuery] = React.useState("");
  const [visibleCardsCount, setVisibleCardsCount] = React.useState(
    INITIAL_VISIBLE_CARDS
  );

  // Fetch podcast data from the specified URL when the component mounts
  React.useEffect(() => {
    fetch("https://podcast-api.netlify.app/")
      .then((res) => res.json())
      .then((data) => {
        setCards(data); // Update the state with fetched data
        setIsLoading(false); // Set loading status to false
      })
      .catch((error) => {
        console.error(error); // Log errors if any
        setIsLoading(false);
      });
  }, []);

  // Map of genre IDs to their corresponding names
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

  // Function to format an array of genre IDs into a comma-separated string of genre names
  function formatGenres(genreIds) {
    return genreIds.map((genreId) => genreMap[genreId]).join(", ");
  }

  // Function to format a timestamp into a readable date format
  function formatTime(timeString) {
    const updateTime = new Date(timeString);
    return updateTime.toLocaleString("en-US", {
      dateStyle: "medium",
    });
  }

  const cardsWithDates = React.useMemo(() => {
    return cards.map((card) => ({
      ...card,
      updatedLabel: formatTime(card.updated),
      updatedTimestamp: new Date(card.updated).getTime(),
    }));
  }, [cards]);

  // Sorting logic based on the selected sorting option
  const sortedCards = React.useMemo(() => {
    const sorted = [...cardsWithDates];

    if (sortingOption === "A-Z") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortingOption === "Z-A") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortingOption === "Ascending") {
      sorted.sort((a, b) => a.updatedTimestamp - b.updatedTimestamp);
    } else if (sortingOption === "Descending") {
      sorted.sort((a, b) => b.updatedTimestamp - a.updatedTimestamp);
    } else if (sortingOption === "Genre") {
      sorted.sort((a, b) =>
        formatGenres(a.genres).localeCompare(formatGenres(b.genres))
      );
    }

    return sorted; // Return the sorted array based on the selected sorting option
  }, [cardsWithDates, sortingOption]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the cards based on the search query
  const filteredCards = React.useMemo(() => {
    return sortedCards.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [sortedCards, searchQuery]);

  React.useEffect(() => {
    setVisibleCardsCount(INITIAL_VISIBLE_CARDS);
  }, [sortingOption, searchQuery, cards.length]);

  const displayedCards = React.useMemo(() => {
    return filteredCards.slice(0, visibleCardsCount);
  }, [filteredCards, visibleCardsCount]);

  const hasMoreCards = visibleCardsCount < filteredCards.length;

  const handleLoadMore = () => {
    setVisibleCardsCount((prevCount) => prevCount + LOAD_MORE_COUNT);
  };

  // Create an array of carousel slide data
  const carouselSlides = React.useMemo(() => {
    return sortedCards.slice(0, FEATURED_CAROUSEL_SLIDES).map((card) => ({
      id: card.id,
      label: card.title,
      image: card.image,
    }));
  }, [sortedCards]);

  // Return the JSX structure for rendering the component
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        {/* If loading, show a loading indicator */}
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress sx={{ height: "150vh" }} color="secondary" />
            <Typography variant="h5" color="text.primary">
              Loading...
            </Typography>
          </Box>
        ) : (
          <>
            {/* Render the image carousel */}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageCarousel slides={carouselSlides} />
            </Grid>

            {/* Render the search input */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  maxWidth: 400,
                  margin: "0 auto",
                }}
              >
                <TextField
                  label="Search"
                  variant="outlined"
                  value={searchQuery}
                  onChange={handleSearch}
                  sx={{ display: "flex", justifyContent: "center" }}
                />
              </Box>
            </Grid>

            {/* Render the container for the podcast cards */}
            <Container sx={{ py: 8 }} maxWidth="md">
              <GroupSizesColors onSortingOptionChange={setSortingOption} />
              <Grid container spacing={4}>
                {/* Render each podcast card */}
                {displayedCards.map((card) => (
                  <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: "100%",
                          aspectRatio: "1 / 1",
                          objectFit: "cover",
                        }}
                        image={card.image}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        width="320"
                        height="320"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.title}
                        </Typography>
                        <Typography component="h2">
                          Genres: {formatGenres(card.genres)}
                        </Typography>
                        <Typography component="h2">
                          Seasons: {card.seasons}
                        </Typography>
                        <Typography component="h2">
                          Updated: {card.updatedLabel}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {/* Pass data to the Dialogs component */}
                        <Dialogs
                          cardid={parseInt(card.id, 10)}
                          cardimage={card.image}
                          cardtitle={card.title}
                          carddescription={card.description}
                          cardseasons={card.seasons}
                          cardgenres={Array.isArray(card.genres) ? card.genres : []}
                          cardupdated={card.updatedLabel}
                          genreMap={genreMap}
                        />
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              {hasMoreCards && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                  <Button variant="contained" onClick={handleLoadMore}>
                    Load more
                  </Button>
                </Box>
              )}
            </Container>
          </>
        )}
      </main>
      {/* Render the footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer"></Box>
      {/* Render the attribution */}
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Icon made by <a href=""> Reion </a> from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </Typography>
    </ThemeProvider>
  );
};

// Export the CardSetUp component
export default CardSetUp;

