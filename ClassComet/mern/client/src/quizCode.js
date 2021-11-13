import { Link, useHistory, useLocation } from "react-router-dom";
import "./login.css";
import React, {Component} from "react";
import comet from "./components/comet_logo.png";

export default class QuizCode extends Component{


startQuiz = () =>{
    this.props.history.push({
        pathname: '/startquiz',
        state: { detail: this.props.location.state.detail}
    });
}

render() {
    return (
        <>
      <body>

<nav class="navbar navbar-default" styles="background-color: #BBBBBB; height: 75px">
    <form class="form-inline">
    </form>
</nav>
<div class="container">
    
<div ><img src={comet} alt="Class Comet" class="logo-corner"/></div>
<div class="quiz_code_text">Quiz Code:</div>
<div class="quiz_code_number">{this.props.location.state.detail}</div>
<form>
<<<<<<< HEAD
    <button type="button" onClick={() => {navigator.clipboard.writeText(this.props.location.state.detail)}} className="copy_quiz_button">Copy Quiz Code</button>
    <button type="button" className="start_quiz_button">Start Quiz</button>
=======
    <button type="button" className="start_quiz_button" onClick={this.startQuiz}>Start Quiz</button>
>>>>>>> 1be0929 (create start quiz page and receive quizzes that match unique ID from database)
</form>     

    
</div>


<div class="bottom-nav">
    <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
</div>

</body>

      </>
    );
  }
}