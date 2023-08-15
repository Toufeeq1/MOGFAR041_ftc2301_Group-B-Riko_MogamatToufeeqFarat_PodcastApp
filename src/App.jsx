// Importing necessary modules and components from react-router-dom and other files

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/Login";
import Home from "./Components/home";
import SignUpPage from "./Components/SignUpPage";
import React, { useEffect } from "react";

// Define and export the main App component
export default function App() {
  // Define a state variable 'token' using React's useState hook and initialize it to false
  const [token, setToken] = React.useState(false);

  // If the 'token' state changes, store it in the sessionStorage with the key 'token'
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  // Use the useEffect hook to perform an action on component mount
  useEffect(() => {
    // When the component mounts, check if there is a 'token' stored in the sessionStorage
    if (sessionStorage.getItem("token")) {
      // If there is a stored 'token', parse it and update the 'token' state
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  // The main render function that returns the JSX to be rendered
  return (
    <BrowserRouter>
      <div>
        {/* Define routes for different pages using the Routes and Route components */}
        <Routes>
          {/* When the URL path matches '/SignUp', render the SignUpPage component */}
          <Route path="SignUp" element={<SignUpPage />} />
          {/* When the URL path is '/', render the LoginPage component and pass the 'setToken' function as a prop */}
          <Route path="/" element={<LoginPage setToken={setToken} />} />
          {/* If 'token' is true (i.e., user is logged in), then render the Home component when the URL path matches '/Home' */}
          {token ? <Route path="Home" element={<Home />} /> : ""}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
