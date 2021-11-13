import { Link, useHistory } from "react-router-dom";
import "./login.css";
import comet from "./components/class_comet.png";
function Landing() {
    return (
        <>
      <body>

<nav class="navbar navbar-default" styles="background-color: #BBBBBB; height: 75px">
    <form class="form-inline">
        <button class="signup-button" type="button"><Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Sign Up</Link></button>
        <button class="login-button" type="button"><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></button>
    </form>
</nav>

<div class="container">
    
    <img src={comet} width="800" height="800" alt="Class Comet" class="move-image" />
    <p class = "welcome-message">Make learning fun with interactive quizzes throughout lecutres!</p>
    <button class="learn-more-button" type="button"><Link to="/learnmore" style={{ textDecoration: 'none', color: 'white' }}>Learn more</Link></button>

    
</div>


<div class="bottom-nav">
    <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
</div>

</body>

      </>
    );
  }
  export default Landing;