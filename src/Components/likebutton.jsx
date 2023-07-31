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
    <button onClick={handleLikeClick} style={{ border: 'none', background: 'transparent', cursor: 'pointer', right: 0 }}>
      {isLiked ? <StarIcon color='primary' fontSize="large" /> : <StarBorderIcon color="primary" fontSize="large" />}
    </button>
  );
};

export default LikeButton;
