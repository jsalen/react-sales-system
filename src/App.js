import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/styles/globals.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Landing from "./pages/Landing";
import ShoppingCar from "./components/ShoppingCar/ShoppingCar";
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
      <Route path="/AddProduct" component={AddProduct} />
    </Router>
  );
}

export default App;
