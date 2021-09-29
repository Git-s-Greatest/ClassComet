import React from "react";
// We use Route in order to define the different routes of our application
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './login.js';
//import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

const App = () => {
  return (
    <div className="app">
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
</div>
  );
};

export default App;