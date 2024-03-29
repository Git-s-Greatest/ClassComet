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
        <div className="welcome-text">
        Welcome, { getID() }
        </div>
    </form>
</nav>

<div class="container">
    <img src={comet} width="800" height="800" alt="Class Comet" class="move-image" />
    <p class = "welcome-message">Make learning fun with interactive quizzes throughout lectures!</p>

    <button class="learn-more-button" type="button"><Link to={{ pathname: '/quizpage', state: { id: Math.round(Date.now() / 1000)} } }style={{ textDecoration: 'none', color: 'white' }}>Make a Quiz</Link></button>


    <button class="join-quiz-button" type="button"><Link to="/joinaquiz" style={{ textDecoration: 'none', color: 'white' }}>Join a Quiz</Link></button>
        
     <button class="flashcards-button" type="button"><Link to="/flashcards" style={{ textDecoration: 'none', color: 'white' }}>Flashcards</Link></button>

    <button class="myprofile-button" type="button">< Link to="/userpage"style={{ textDecoration: 'none', color: 'white' }}>My Profile</Link></button>
</div>


<div class="bottom-nav">
    <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
</div>

</body>

      </>
    );
  }
  export default Quiz;
