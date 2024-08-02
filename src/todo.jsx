// Import the React library
import React from "react";

// Import the CSS file for styling
import "./App.css";

// Import the useEffect and useState hooks from React (unused in this file)
import { useEffect, useState } from "react";

// Import the Todo component from the todo.js file
import Todo from "./todo";

// Import necessary components and functions from react-router-dom for routing
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import the Home component from the home.js file
import Home from "./home";

// Define the main App component
function App() {
  // Define an array of data (unused in the component)
  let data = ["8jefjes8328438", "8734hfh23"];

  // Return the JSX for the App component
  return (
    <>
      {/* Navigation menu */}
      <ul>
        <li>
          {/* Link to the Home page */}
          <Link to="/" target="blank">
            Home
          </Link>
        </li>
        <li>
          {/* Map through the data array to create multiple Todo links (inefficient, as it creates duplicate links) */}
          {data.map((item) => (
            <Link to="/todo" target="blank">
              Todo
            </Link>
          ))}
        </li>
      </ul>

      {/* Define routes for the application */}
      <Routes>
        {/* Route for the home page */}
        <Route index element={<Home />} />
        {/* Route for the todo page */}
        <Route path="/todo" element={<Todo />} />
      </Routes>

      {/* Footer */}
      <footer>this is footer</footer>
    </>
  );
}

// Export the App component as the default export
export default App;
