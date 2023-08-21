import PropTypes from 'prop-types';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import Grid from "@mui/material/Grid";

const GroupSizesColors = ({ onSortingOptionChange }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ paddingBottom: "5px" }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <ButtonGroup
          fullWidth
          size="large"
          color="primary"
          aria-label="sorting button group"
        >
          <Button
            style={{ color: "#A305BA" }}
            onClick={() => onSortingOptionChange("A-Z")}
          >
            A-Z
          </Button>
          <Button
            style={{ color: "#A305BA" }}
            onClick={() => onSortingOptionChange("Z-A")}
          >
            Z-A
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ButtonGroup
          fullWidth
          size="large"
          color="primary"
          aria-label="sorting button group"
        >
          <Button
            style={{ color: "#A305BA" }}
            onClick={() => onSortingOptionChange("Ascending")}
          >
            Ascending
          </Button>
          <Button
            style={{ color: "#A305BA" }}
            onClick={() => onSortingOptionChange("Descending")}
          >
            {" "}
            Descending
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ButtonGroup
          fullWidth
          size="large"
          color="primary"
          aria-label="sorting button group"
        >
          <Button
            style={{ color: "#A305BA" }}
            onClick={() => onSortingOptionChange("Genre")}
          >
            Sort by Genre
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

GroupSizesColors.propTypes = {
  onSortingOptionChange: PropTypes.func.isRequired,
};

export default GroupSizesColors;
