import { Link, useHistory } from "react-router-dom";
import "./login.css";
import comet from "./components/comet_logo.png";
function QuizEdit() {
    return (
        <>
      <body>

<nav class="navbar navbar-default" styles="background-color: #BBBBBB; height: 75px">
    <form class="form-inline">
    </form>
</nav>

<div class="container">
    
    <div ><img src={comet} alt="Class Comet" class="logo-corner"/></div>

    <div class="edits_box">
            <div class="seconds_text">
                Seconds per Question
                <input className="time_per_question" type="text"/>
            </div>
            <div class="points_text">
                Points per Question
                <input className="points_per_question" type="text"/>
                <button type="button" className="start_quiz_button">Start Quiz</button>
            </div>
    </div>
</div>


<div class="bottom-nav">
    <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
</div>

</body>

      </>
    );
  }
  export default QuizEdit;