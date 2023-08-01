/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import LikeButton from './likebutton';

// EpisodeDetails component
const EpisodeDetails = ({ episode }) => {
  const [volume, setVolume] = useState(30);

  const handleChangeVolume = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    // Component to display episode details
    <span style={{ display: 'flex', gap: '10px', flexDirection: 'column', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <LikeButton />
      <span style={{ fontSize: '4vh' }}>{episode.title}</span>
      <span className='description'>{episode.description}</span>
      <span>
        {/* Audio player for the episode */}
        <audio controls>
          <source src={episode.file} type="audio/mpeg" />
        </audio>
      </span>
    </span>
  );
};

// BasicSelect component
export default function BasicSelect({ idSeasons }) {
  const [selectedSeason, setSelectedSeason] = useState('');
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedSeasonEpisodes, setSelectedSeasonEpisodes] = useState(0); // State variable to store the total number of episodes

  // Handler for selecting a season from the dropdown
  const handleChangeSeason = (event) => {
    const selectedSeasonValue = event.target.value;
    setSelectedSeason(selectedSeasonValue);

    // Find the selected season and get the total number of episodes
    const season = idSeasons.seasons.find((season) => season.season === selectedSeasonValue);
    setSelectedSeasonEpisodes(season.episodes.length);

    setDialogOpen(true); // Open the dialog when a season is selected
  };

  // Handler for closing the dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    // Component to display the season selection dropdown and the episode details dialog
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* Dropdown to select a season */}
        <InputLabel id="demo-simple-select-label">Seasons</InputLabel>
        <Select value={selectedSeason} label="Season" onChange={handleChangeSeason}>
          {idSeasons.seasons.map((season) => (
            // Menu items for each season in the dropdown
            <MenuItem key={season.season} value={season.season}>
              {season.season}: {season.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Dialog to display season details and episode list */}
      <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullScreen>
        <DialogTitle>Season Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Display the total number of episodes in the selected season */}
            Total Episodes in Season {selectedSeason}: {selectedSeasonEpisodes}
          </DialogContentText>
          {selectedSeason && (
            <Box>
              <DialogContentText>
                {/* Display the image of the selected season */}
                <Box
                  component="img"
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 200, md: 167 },
                    maxWidth: { xs: 200, md: 250 },
                    display: 'flex',
                    margin: 'auto',
                  }}
                  src={idSeasons.seasons.find((season) => season.season === selectedSeason).image} // Access the image URL from the selected season object
                />
                {/* Display episode details using the EpisodeDetails component */}
                {idSeasons.seasons
                  .find((season) => season.season === selectedSeason)
                  .episodes.map((episode) => (
                    <EpisodeDetails key={episode.episode} episode={episode} />
                  ))}
              </DialogContentText>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          {/* Close button for the dialog */}
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}