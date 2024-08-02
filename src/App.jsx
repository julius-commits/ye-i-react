// Import the React library
import React from "react";

// Import the useEffect and useState hooks from React
import { useEffect, useState } from "react";

// Import the CSS file for styling
import "./App.css";

import Todo from "./todo";

// Define the main App component
function App() {
  // Initialize tasks state with a function that retrieves tasks from localStorage or sets a default task
  return (
    <>
      <Todo />
    </>
  );
}
export default App;
