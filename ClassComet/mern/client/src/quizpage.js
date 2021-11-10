
import axios from 'axios';
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import "./login.css";
import comet from "./components/comet_logo.png";
import React, { Component } from "react";

export default class QuizPage extends Component{

    constructor(props){
        super(props);
        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onChangeAnswer1 = this.onChangeAnswer1.bind(this);
        this.onChangeAnswer2 = this.onChangeAnswer2.bind(this);
        this.onChangeAnswer3 = this.onChangeAnswer3.bind(this);
        this.onChangeAnswer4 = this.onChangeAnswer4.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangePoints = this.onChangePoints.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    
        this.state = {
            question: '',
            ans1: '',
            ans2: '',
            ans3: '',
            ans4: '',
            time: 15,
            points: 10

        }
    }

    onChangeQuestion(e){
        this.setState({
            question: e.target.value
        });
    }

    onChangeAnswer1(e){
        this.setState({
            ans1: e.target.value
        });
    }

    onChangeAnswer2(e){
        this.setState({
            ans2: e.target.value
        });
    }

    onChangeAnswer3(e){
        this.setState({
            ans3: e.target.value
        });
    }

    onChangeAnswer4(e){
        this.setState({
            ans4: e.target.value
        });
    }

    onChangeTime(e){
        this.setState({
            time: e.target.value
        });
    }

    onChangePoints(e){
        this.setState({
            points: e.target.value
        });
    }


    finishEdit = () =>{
        this.props.history.push(`/quizEdits`);
    }

    onSubmit(e) {
        e.preventDefault();
        const pageInfo = {
            id: this.props.location.state['id'],
            question: this.state.question,
            ans1: this.state.ans1,
            ans2: this.state.ans2,
            ans3: this.state.ans3,
            ans4: this.state.ans4,
            points: this.state.points,
            time: this.state.time
        }
        
        console.log(pageInfo);

        axios.post("http://localhost:5000/record/add", pageInfo)
        .then(res => console.log(res.data))
        .catch(err => console.log('errorrororo - ' + err.data))

        window.location = '/quizpage'
    }

    render(){
        return (
        <body>

        <nav class="navbar navbar-default" styles="background-color: #BBBBBB; height: 75px">
            <form class="form-inline">
            </form>
        </nav>

    
                
            <div ><img src={comet} alt="Class Comet" class="logo-corner"/></div>
            <div class="question-box">
                    <input type="text" className="question" value={this.state.question} onChange={this.onChangeQuestion} placeholder="Enter a Question:"/>
                    <input type="text" className="answer1" value={this.state.ans1} onChange={this.onChangeAnswer1} placeholder="    Right Answer"/>
                    <input type="text" className="answer2" value={this.state.ans2} onChange={this.onChangeAnswer2} placeholder="    Wrong Answer"/>
                    <div class="seconds_text">
                        Seconds per Question
                        <input className="time_per_question" type="text" value={this.state.time} onChange={this.onChangeTime}/>
                    </div> 
                    <input type="text" className="answer3" value={this.state.ans3} onChange={this.onChangeAnswer3} placeholder="    Wrong Answer"/>
                    <input type="text" className="answer4" value={this.state.ans4} onChange={this.onChangeAnswer4} placeholder="    Wrong Answer:"/>
                    <div class="points_text">
                        Points per Question
                        <input className="points_per_question" type="text" value={this.state.points} onChange={this.onChangePoints}/>
                    </div>   
                    <form onSubmit={this.onSubmit}>
                        <input type="submit" value="Save" className="save_textbox"/>
                        <button type="button" className="finish_button" onClick={this.finishEdit}>Finish</button>
                    </form>     
            </div>


        <div class="bottom-nav">
            <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
        </div>

        </body>

        );
    }
}