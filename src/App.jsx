// Import the React library
import React from "react";

// Import the useEffect and useState hooks from React
import { useEffect, useState } from "react";

// Import the CSS file for styling
import "./App.css";

import Todo from "./todo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
// Define the main App component
function App() {
  // Initialize tasks state with a function that retrieves tasks from localStorage or sets a default task
  return (
    <>
      <ul>
        <li>
          <Link to="/" target="blank">
            Home
          </Link>
        </li>
        <li>
          <Link to="/todo" target="blank">
            Todo
          </Link>
        </li>
      </ul>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      <footer>this is footer</footer>
    </>
  );
}
export default App;
