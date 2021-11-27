import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";
import Flashcard from "./components/Flashcard/Flashcard.js";
import CreateFlashcard from "./components/Flashcard/CreateFlashcard.js";
import "./flashcards.css"


export default class Flashcards extends Component {
  constructor() {
    super();
    this.state = {
      menu: "decks",
      decksKey: 1
    };
    this.setMenu = this.setMenu.bind(this);
  }
  setMenu(menu) {
    this.setState({ menu, decksKey: new Date().getTime() });
  }
  render() {
    return (
      <div className="Flashcards">
          <nav class="navbar navbar-default" styles="background-color: #BBBBBB; height: 75px">
            <form class="form-inline">
            </form>
        </nav>

        <div class="top-border">

        </div>
      

        <Container>
          {(() => {
            switch (this.state.menu) {
              case "decks":
                return <Flashcard key={this.state.decksKey} />;
              case "create":
                return <CreateFlashcard />;
            }
          })()}
        </Container>

        <div class="bottom-nav">
            <p1 styles="font-size: 20px; font-weight: bold; top: 20px; left: 30px">Gits Greatest</p1>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Flashcards />, rootElement);


