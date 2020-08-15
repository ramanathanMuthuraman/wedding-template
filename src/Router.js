import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Gallery from "./pages/Gallery";
import Nav from "./components/Nav/Nav";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
