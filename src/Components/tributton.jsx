/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const GroupSizesColors = ({ onSortingOptionChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="large" color="secondary" aria-label="sorting button group">
        <Button onClick={() => onSortingOptionChange('A-Z')}>A-Z</Button>
        <Button onClick={() => onSortingOptionChange('Z-A')}>Z-A</Button>
      </ButtonGroup>
      <ButtonGroup size="large" color="primary" aria-label="sorting button group">
        <Button onClick={() => onSortingOptionChange('Ascending')}>Sort Ascending</Button>
        <Button onClick={() => onSortingOptionChange('Descending')}>Sort Descending</Button>
      </ButtonGroup>
      <ButtonGroup size="large" color="primary" aria-label="sorting button group">
        <Button onClick={() => onSortingOptionChange('Genre')}>Sort by Genre</Button>
      </ButtonGroup>
    </Box>
  );
};

export default GroupSizesColors;
