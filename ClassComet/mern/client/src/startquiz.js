import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import "./login.css";
import React, {Component} from "react";
import comet from "./components/comet_logo.png";
import axios from 'axios';

export default class StartQuiz extends Component{
    
    constructor(props){
        super(props);
        this.loadQuestion = this.loadQuestion.bind(this)
        this.state = {
            question: "",
            rightAns: "",
            wrongAns1: "",
            wrongAns2: "",
            wrongAns3: "",
            countdown: 10,
            time: 15,
        }

        this.timer = setInterval(() => this.tick(), props.timeout || 1000);
    }

    tick() {
        const current = this.state.countdown;
        if (current === 0) {
          this.transition();
        } else {
          this.setState({ countdown: current - 1 }); 
        } 
      }
    
    transition() {
        clearInterval(this.timer);
        // do something else here, presumably.
    }

    loadQuestion(){
        let url = "http://localhost:5000/get-quiz/" + this.props.location.state.detail;
        axios.get(url)
        .then(response => {
        this.response = response.data[0];
        console.log(this.response['question']);
        this.setState({question: this.response['question']});
        this.setState({rightAns: this.response['answer1']});
        this.setState({wrongAns1: this.response['answer2']});
        this.setState({wrongAns2: this.response['answer3']});
        this.setState({wrongAns3: this.response['answer4']});
        this.setState({points: this.response['points']});
        this.setState({countdown: this.response['time']});
        });
    }

    //called when the load button is pressed
    handleLoadClick = () => {
      this.loadQuestion();  //loads a question
      this.tick();  //starts the countdown
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

<div class="timer">Time: {this.state.countdown}</div>

<button class = "question_view" type="button" >{this.state.question}</button>
<button class = "first_view" type="button" >{this.state.rightAns}</button>
<button class = "second_view" type="button" >{this.state.wrongAns1}</button>
<button class = "third_view" type="button" >{this.state.wrongAns2}</button>
<button class = "fourth_view" type="button" >{this.state.wrongAns3}</button>
<button type="button" class='load_question_button' value={this.props.location.state.detail} onClick={this.handleLoadClick}>load</button>
<button type="button"  class = "copy_button" onClick={() => {navigator.clipboard.writeText(this.props.location.state.detail)}}>Quiz Code: {this.props.location.state.detail}</button> 

    
</div>


<div class="bottom-nav">
    <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
</div>

</body>

      </>
    );
  }
}