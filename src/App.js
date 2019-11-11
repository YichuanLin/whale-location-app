import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>hello world!!</h1>
      <Router>
        <MainRoutes />
      </Router>
    </div>
  );
}

export default App;
