import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ShoppingCar from "./components/ShoppingCar/ShoppingCar";

function App() {
  return (
    <Router>
      <Navigation />
      <Container className="">
        <Route path="/shopping-car" component={ShoppingCar} />
      </Container>
    </Router>
  );
}

export default App;
