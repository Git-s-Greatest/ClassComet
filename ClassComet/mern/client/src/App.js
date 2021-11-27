import React from "react";
// We use Route in order to define the different routes of our application
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './login.js';
import Register from './register.js';
import Landing from './landing.js';
import LearnMore from './learnmore.js';
import Quiz from './makequiz.js';
import JoinaQuiz from "./joinaquiz.js";
import QuizPage from "./quizpage.js";
import TakeQuiz from "./takequiz.js";
import QuizCode from "./quizCode.js";
import StartQuiz from "./startquiz.js";
import UserPage from "./userpage.js";
//import { Route } from "react-router-dom";

//needed for flashcards
import 'semantic-ui-css/semantic.min.css'
import { Container } from "semantic-ui-react";
import CreateFlashcard from "./components/Flashcard/CreateFlashcard.js";
import Flashcards from "./Flashcards.js";

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
      <Route exact path="/joinaquiz" component={JoinaQuiz} />
      <Route exact path="/quizpage" component={QuizPage} />
      <Route exact path="/takequiz" component={TakeQuiz} />
      <Route exact path="/quizCode" component={QuizCode} />
      <Route exact path="/startquiz" component={StartQuiz} />
      <Route exact path="/userpage" component={UserPage} />
      <Route exact path="/flashcards" component={Flashcards} />
    </Switch>
  </Router>
</div>
  );
};

export default App;
