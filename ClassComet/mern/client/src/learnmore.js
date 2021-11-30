import { Link, useHistory } from "react-router-dom";
import "./login.css";
import comet from "./components/class_comet.png";
import cometname from "./components/class_comet_name_logo.png";
function LearnMore() {
    return (
        <>
      <body>

<nav class="navbar navbar-default" styles="background-color: #BBBBBB; height: 75px">
    <form class="form-inline">
    <button class="signup-button" type="button"><Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Sign Up</Link></button>
        <button class="login-button" type="button"><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></button>
    </form>
</nav>
<div><img src={cometname}  alt="Class Comet" /></div>
<div  >
    <p class = "learnmore_style">
      ClassComet is a website that allows people, usually teachers, 
      to make quizzes and play them in class. 
    </p>
    
    <p class = "learnmore2_style">
    ClassComet serves as an interactive quiz for fun or to allow the teacher to gauge how students are learning throughout the class.
    </p>


    <div class = "learnmore-box">
    <button  className="learnmore__textBox" type="button"><Link to="/register" style={{ textDecoration: 'none', color: '#3C3760' }}> Register Now</Link></button>
    <br></br>
    
    <button  className="learnmore__textBox" type="button"><Link to="/login" style={{ textDecoration: 'none', color: '#3C3760' }} >Login</Link></button>
    </div>


    
</div>


<div class="bottom-nav">
    <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
</div>

</body>

      </>
    );
  }
  export default LearnMore;