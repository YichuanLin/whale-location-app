import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes";
import Header from "./components/header";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

import "./App.css";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  const links = [
    { url: "/", label: "Home" },
    { url: "/full-info", label: "Full Info" },
    { url: "/detail/null", label: "Detail" },
    { url: "/test", label: "Test" }
  ];
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header links={links} />
          <div className="main-router-wrapper">
            <MainRoutes />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
