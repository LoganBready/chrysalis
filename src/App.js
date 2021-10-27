import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
import Mission from "./pages/Mission";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/services" render={() => <Services />} />
          <Route path="/jobs" render={() => <Jobs />} />
          <Route path="/mission" render={() => <Mission />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
