import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/styles/globals.css";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Landing from "./pages/Landing";
import ShoppingCar from "./pages/ShoppingCar";
import Admin from "./pages/Admin";
import Inventory from "./pages/Inventory";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={Landing} />
      <Route path="/shopping-car" component={ShoppingCar} />
      <Route path="/admin" component={Admin} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/editProduct/:id" component={AddProduct} />
      <Route path="/addProduct" component={AddProduct} />
    </Router>
  );
}

export default App;
