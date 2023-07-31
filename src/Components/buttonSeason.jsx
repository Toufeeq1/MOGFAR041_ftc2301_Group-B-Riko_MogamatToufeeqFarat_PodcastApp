/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
import './index.css'

const EpisodeDetails = ({ episode }) => {
    const [volume, setVolume] = useState(30);
  
    const handleChangeVolume = (event, newValue) => {
      setVolume(newValue);
    };
  
    return (
      <span style={{  display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <span style={{ fontSize: '4vh' }} >{episode.title}</span>
        <span className='description'>{episode.description}</span>
        <span>
          <audio controls>
            <source src={episode.file} type="audio/mpeg" />
          </audio>
        </span>
      </span>
    );
  };
  

export default function BasicSelect({ idSeasons }) {
  const [selectedSeason, setSelectedSeason] = useState('');
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleChangeSeason = (event) => {
    const selectedSeasonValue = event.target.value;
    setSelectedSeason(selectedSeasonValue);
    setDialogOpen(true); // Open the dialog when a season is selected
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Seasons</InputLabel>
        <Select
          value={selectedSeason}
          label="Season"
          onChange={handleChangeSeason}
        >
          {idSeasons.seasons.map((season) => (
            <MenuItem key={season.season} value={season.season}>
              {season.season}: {season.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullScreen>
        <DialogTitle>Season Details</DialogTitle>
        <DialogContent>
          {selectedSeason && (
            <Box>
              <DialogContentText>
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
                  src={idSeasons.image}
                />
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
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
