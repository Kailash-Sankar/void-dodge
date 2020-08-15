import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store/root";

import Home from "./Home";
import { NavBar, PageNotFound } from "@components";
import { Loader } from "@components/";

const About = lazy(() => import("./About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader loading={true} />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
      <NavBar />
    </Router>
  );
}

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
