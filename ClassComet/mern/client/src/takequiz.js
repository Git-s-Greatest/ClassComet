import { Link, useHistory } from "react-router-dom";
import "./login.css";
import comet from "./components/comet_logo.png";
function TakeQuiz() {
    return (
        <>
      <body>

<nav class="navbar navbar-default" styles="background-color: #BBBBBB; height: 75px">
    <form class="form-inline">
    </form>
</nav>
<div class="container">
    
<div ><img src={comet} alt="Class Comet" class="logo-corner"/></div>
<div class="select-box">
        <input className="select1" type="submit" value="╳" />
        <input className="select2" type="submit" value="◯◯"/>
        <input className="select3" type="submit" value="⧖⧖⧖"/>
        <input className="select4" type="submit" value="⊡⊡⊡⊡"/>      
</div>
    
</div>


<div class="bottom-nav">
    <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
</div>

</body>

      </>
    );
  }
  export default TakeQuiz;