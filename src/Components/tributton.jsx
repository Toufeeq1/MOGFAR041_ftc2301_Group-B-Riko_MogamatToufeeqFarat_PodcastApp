/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Grid from '@mui/material/Grid';

const GroupSizesColors = ({ onSortingOptionChange }) => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6} md={4}>
        <ButtonGroup
          fullWidth
          size="large"
          color="secondary"
          aria-label="sorting button group"
        >
          <Button onClick={() => onSortingOptionChange('A-Z')}>A-Z</Button>
          <Button onClick={() => onSortingOptionChange('Z-A')}>Z-A</Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ButtonGroup
          fullWidth
          size="large"
          color="primary"
          aria-label="sorting button group"
        
        >
          <Button onClick={() => onSortingOptionChange('Ascending')}> Ascending</Button>
          <Button onClick={() => onSortingOptionChange('Descending')}> Descending</Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ButtonGroup
          fullWidth
          size="large"
          color="primary"
          aria-label="sorting button group"
        >
          <Button onClick={() => onSortingOptionChange('Genre')}>Sort by Genre</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default GroupSizesColors;



