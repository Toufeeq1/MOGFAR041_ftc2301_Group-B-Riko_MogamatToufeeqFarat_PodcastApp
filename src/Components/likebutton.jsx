/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <span style={{ position: 'relative' }}>
      <button onClick={handleLikeClick} style={{ position: 'absolute', top: 0, right: 0, border: 'none', background: 'transparent', cursor: 'pointer' }}>
        {isLiked ? <StarIcon color="primary" fontSize="large" /> : <StarBorderIcon color="primary" fontSize="large" />}
      </button>
    </span>
  );
};

export default LikeButton;
