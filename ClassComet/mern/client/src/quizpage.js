import { Link, useHistory } from "react-router-dom";
import "./login.css";
import comet from "./components/comet_logo.png";
function QuizPage() {
    return (
        <>
      <body>

<nav class="navbar navbar-default" styles="background-color: #BBBBBB; height: 75px">
    <form class="form-inline">
    </form>
</nav>

<div class="container">
    
<div ><img src={comet} alt="Class Comet" class="logo-corner"/></div>
 
<div class="question-box">
        <input className="question"type="text"placeholder="Enter a Question:"/>
        <input className="answer1"type="text"placeholder="Answer #1:"/>
        <input className="answer2"type="text"placeholder="Answer #2:"/>
        <input className="answer3"type="text"placeholder="Answer #3:"/>
        <input className="answer4"type="text"placeholder="Answer #4:"/> 
        <form>
            <input className="save_textBox"type="submit" value="Save" />
        </form>       
</div>

    
</div>


<div class="bottom-nav">
    <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
</div>

</body>

      </>
    );
  }
  export default QuizPage;