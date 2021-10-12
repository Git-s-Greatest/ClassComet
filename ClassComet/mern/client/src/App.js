import React from "react";
// We use Route in order to define the different routes of our application
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './login.js';
import Register from './register.js';
import Landing from './landing.js';
import LearnMore from './learnmore.js';
import Quiz from './makequiz.js';
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
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/learnmore" component={LearnMore} />
      <Route exact path="/makequiz" component={Quiz} />
    </Switch>
  </Router>
</div>
  );
};

export default App;