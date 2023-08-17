import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box
} from '@mui/material';
import BasicSelect from './Season'; // Assuming this is a custom component for selecting seasons

import { useState } from 'react';

// Define the Dialogs component
const Dialogs = ({ cardimage, cardtitle, carddescription, cardgenres, cardupdated, cardid }) => {
  // State to hold additional show data
  const [showid, setShowid] = React.useState();

  // Fetch additional show data when the component mounts
  React.useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${cardid}`)
      .then(res => res.json())
      .then(data => {
        setShowid(data);
      })
      .catch(error => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // State to control the dialog open state
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button to open the dialog */}
      <Button onClick={() => setOpen(true)}>Description</Button>
      {/* The dialog itself */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'>
        <DialogTitle sx={{
          display: 'flex',
          margin: 'auto'
        }} id='dialog-title'>{cardtitle}</DialogTitle>
        <DialogContent>
          {/* Display the podcast image */}
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 200, md: 167 },
              maxWidth: { xs: 200, md: 250 },
              display: 'flex',
              margin: 'auto'
            }}
            src={cardimage}
          />
          {/* Display the podcast description */}
          <DialogContentText >
            Description: {carddescription}
          </DialogContentText>
          {/* Display the podcast updated date */}
          <DialogContentText >
            Updated: {cardupdated}
          </DialogContentText>
          {/* Display the podcast genres */}
          <DialogContentText >
            Genres: {cardgenres}
          </DialogContentText>
          {/* Render the BasicSelect component */}
          <DialogActions>
            <BasicSelect idSeasons={showid} />
          </DialogActions>
        </DialogContent>
        {/* Dialog actions, including the close button */}
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
// Define prop types for the Dialogs component
Dialogs.propTypes = {
  cardimage: PropTypes.string.isRequired,
  cardtitle: PropTypes.string.isRequired, 
  carddescription: PropTypes.string.isRequired,
  cardgenres: PropTypes.arrayOf(PropTypes.number).isRequired,
  cardupdated: PropTypes.string.isRequired,
  cardid: PropTypes.number.isRequired,
  genreMap: PropTypes.object.isRequired,
};

export default Dialogs; // Export the Dialogs component
