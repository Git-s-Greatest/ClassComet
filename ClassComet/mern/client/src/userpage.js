import { Link, useHistory } from "react-router-dom";
import "./login.css";
import comet2 from "./components/comet2.png";
import grayface from "./components/grayface.png";

import { getID} from "./firebase";
function UserPage() {
    return (
        <>
      <body>

<nav class="navbar navbar-default" styles="background-color: #BBBBBB; height: 75px">
    <form class="form-inline">
    </form>
</nav>
<img src={grayface} width="175" height="175" alt="Class Comet"  className = "gray-image"/>
<Link to=''><button class='landing-page' type='button'><img src={comet2} width="250" height="250" alt="Class Comet" className = "user-move-image"/></button></Link>
<div>
<div className="user-text"> { getID() } </div>
</div>

<div class = "user-box">

    <button  className="learnmore__textBox" type="button"> Profile Options</button>
    <br></br>
    
    <button  className="learnmore__textBox" type="button"> My Scores</button>
    <br></br>
    <button  className="learnmore__textBox" type="button"> My Quizzes</button>
    <br></br>
    <button  className="learnmore__textBox" type="button"><Link to="/flashcards"style={{ textDecoration: 'none', color: 'black' }}> My Flashcards</Link></button>
    <br></br>
    
    <button  className="learnmore__textBox" type="button"> Classrooms</button>
    
    



</div>



<div class="container">
    
<button class="learn-more-button" type="button"><Link to={{ pathname: '/quizpage', state: { id: Math.round(Date.now() / 1000)} } }style={{ textDecoration: 'none', color: 'white' }}>Make a Quiz</Link></button>


<button class="join-quiz-button" type="button"><Link to="/joinaquiz" style={{ textDecoration: 'none', color: 'white' }}>Join a Quiz</Link></button>
 
<button class="flashcards-button" type="button"><Link to="/flashcards" style={{ textDecoration: 'none', color: 'white' }}>Flashcards</Link></button>


</div>
    



<div class="bottom-nav">
    <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
</div>

</body>

      </>
    );
  }
  export default UserPage;