import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes";
import Header from "./components/header";
import whalesReducer from "./reducers/whales";
import { StateProvider } from "./store";

import "./App.css";

function App() {
  const links = [
    { url: "/", label: "Home" },
    { url: "/full-info", label: "Full Info" },
    { url: "/detail/null", label: "Detail" }
  ];
  return (
    <StateProvider
      reducer={whalesReducer}
      initialState={{ list: null, isFetching: false, error: null }}
    >
      <Router>
        <div className="App">
          <Header links={links} />
          <div className="main-router-wrapper">
            <MainRoutes />
          </div>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
