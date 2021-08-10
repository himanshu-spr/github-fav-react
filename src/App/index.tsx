import React, { lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = lazy(() => import("../components/HomePage"));
const Favorites = lazy(() => import("../components/Favorites"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/favorites" component={Favorites} exact />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
