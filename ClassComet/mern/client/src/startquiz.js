import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import "./login.css";
import React, {Component} from "react";
import comet from "./components/comet_logo.png";
import axios from 'axios';

export default class StartQuiz extends Component{
    
    constructor(props){
        super(props);
        this.loadQuestion = this.loadQuestion.bind(this)
    }


loadQuestion(){
    let url = "http://localhost:5000/get-quiz/" + this.props.location.state.detail;
    console.log(url);
    axios.get(url);
    //.then((response) => {
      //console.log(response.data)
    //});
}



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

<button type="button" value={this.props.location.state.detail} onClick={this.loadQuestion}>load</button>
<button type="button"  class = "copy_button" onClick={() => {navigator.clipboard.writeText(this.props.location.state.detail)}}>Quiz Code: {this.props.location.state.detail}</button> 

<button class = "question_view" type="button" >Question</button>
<button class = "first_view" type="button" >1st</button>
<button class = "second_view" type="button" >2nd</button>
<button class = "third_view" type="button" >3rd</button>
<button class = "fourth_view" type="button" >4th</button>


    
</div>


<div class="bottom-nav">
    <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
</div>

</body>

      </>
    );
  }
}