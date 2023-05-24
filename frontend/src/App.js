import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getName();
  }, []);

  const getName = async () => {
    const response = await axios.get("/names");
    setUserName(response.data);
  };

  return (
     <>
      <h1>My Website</h1>
      <h3>{userName}</h3>
    </>
  );
}

export default App;
