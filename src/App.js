import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/styles/globals.css";

import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Navigation from "./components/Navigation/Navigation";
import Landing from "./pages/Landing";
import SalesPanel from "./pages/SalesPanel";
import Admin from "./pages/Admin";
import Inventory from "./pages/Inventory";
import AddProduct from "./pages/AddProduct";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const { user: currentUser } = useSelector((state) => state.auth);

  return (
    <Router>
      <Navigation />
      <Route
        exact
        path="/"
        render={() => (currentUser ? <Landing /> : <Redirect to="/login" />)}
      />
      <Route
        path="/shopping-car"
        render={() => (currentUser ? <SalesPanel /> : <Redirect to="/login" />)}
      />
      <Route
        path="/admin"
        render={() => (currentUser ? <Admin /> : <Redirect to="/login" />)}
      />
      <Route
        path="/inventory"
        render={() => (currentUser ? <Inventory /> : <Redirect to="/login" />)}
      />
      <Route
        path="/editProduct/:id"
        render={() =>
          currentUser.roles.includes("ROLE_ADMIN") ? (
            <AddProduct />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route
        path="/addProduct"
        render={() =>
          currentUser.roles.includes("ROLE_ADMIN") ? (
            <AddProduct />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route
        path="/reports"
        render={() => (currentUser ? <Reports /> : <Redirect to="/login" />)}
      />
      <Route
        path="/login"
        render={() => (!currentUser ? <Login /> : <Redirect to="/" />)}
      />
      <Route
        path="/register"
        render={() =>
          currentUser && currentUser.roles.includes("ROLE_ADMIN") ? (
            <Register />
          ) : (
            <Redirect to="/" />
          )
        }
      />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
