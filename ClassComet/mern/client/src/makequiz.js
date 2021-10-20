import { Link, useHistory } from "react-router-dom";
import { getID} from "./firebase";
import "./login.css";
import comet from "./components/class_comet.png";

function Quiz() {
    return (
        <>
      <body>

<nav class="navbar navbar-default" styles="background-color: #BBBBBB; height: 75px">
    <form class="form-inline">
        <div class="welcome-text">
        Welcome, { getID() }
        </div>
    </form>
</nav>

<div class="container">
    <img src={comet} width="650" height="650" alt="Class Comet" class="move-image" />
    <p class = "welcome-message">Make learning fun with interactive quizzes throughout lecutres!</p>
    <button class="learn-more-button" type="button">Make a Quiz</button> 
    <button class="join-quiz-button" type="button"><Link to="/joinaquiz" >Join a Quiz</Link></button>
</div>


<div class="bottom-nav">
    <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
</div>

</body>

      </>
    );
  }
  export default Quiz;