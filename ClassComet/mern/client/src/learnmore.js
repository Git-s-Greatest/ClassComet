import { Link, useHistory } from "react-router-dom";
import "./login.css";
import comet from "./components/class_comet.png";
function LearnMore() {
    return (
        <>
      <body>

<nav class="navbar navbar-default" styles="background-color: #BBBBBB; height: 75px">
    <form class="form-inline">
        <button class="signup-button" type="button"><Link to="/register">Sign Up</Link></button>
        <button class="login-button" type="button"><Link to="/login">Login</Link></button>
    </form>
</nav>

<div class="container">
    
  
    <p>Thorough Description of Site</p>

    
</div>


<div class="bottom-nav">
    <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
</div>

</body>

      </>
    );
  }
  export default LearnMore;