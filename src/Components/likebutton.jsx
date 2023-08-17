
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

// Define the LikeButton component
const LikeButton = () => {
  // State to track whether the button is liked or not
  const [isLiked, setIsLiked] = useState(false);

  // Function to handle the click event when the button is clicked
  const handleLikeClick = () => {
    // Toggle the value of isLiked when the button is clicked
    setIsLiked(!isLiked);
  };

  return (
    <span style={{ position: "relative" }}>
      {/* Button to toggle the like status */}
      <button
        onClick={handleLikeClick}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        {/* Display the appropriate icon based on the like status */}
        {isLiked ? (
          <StarIcon color="primary" fontSize="large" />
        ) : (
          <StarBorderIcon color="primary" fontSize="large" />
        )}
      </button>
    </span>
  );
};

export default LikeButton; // Export the LikeButton component
