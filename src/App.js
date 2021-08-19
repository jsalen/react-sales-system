import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/styles/globals.css";

import React from "react";
import Routes from "./routes";

import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
