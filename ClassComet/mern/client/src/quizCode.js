import { Link, useHistory, useLocation } from "react-router-dom";
import "./login.css";
import React, {Component} from "react";
import comet from "./components/comet_logo.png";

export default class QuizCode extends Component{

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
    <button type="button" className="start_quiz_button">Start Quiz</button>
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