// Import React module
import React from "react";

// Define a functional component 'CardSetUp'
const CardSetUp = () => {
    // Define a state variable 'card' using React's useState hook and initialize it as an empty array
    const [card, setCard] = React.useState([]);

    // Use the useEffect hook to perform an action on component mount or when 'card' state changes
    React.useEffect(() => {
        // Fetch data from the given URL endpoint using the fetch API
        fetch("https://podcast-api.netlify.app/")
            .then(res => res.json()) // Convert the response to JSON format
            .then(data => setCard(data)) // Update the 'card' state with the fetched data
            // console.log(card) // Uncomment this line to log the 'card' state (not recommended in production)
    }, [card]); // The effect will be triggered whenever the 'card' state changes

    // Map over the 'card' array to create JSX elements for each card object
    const eachCard = card.map(obj => {
        return (
            <div key={obj.id}>
                {/* Display the image and title properties of each card object */}
                <img className='card-img' src={obj.image} alt="" />
                <span>Title: {obj.title}</span>
            </div>
        );
    });

    // Return the JSX to be rendered
    return (
        <div>
            <span>{eachCard}</span>
        </div>
    );
};

// Export the 'CardSetUp' component as the default export
export default CardSetUp;
