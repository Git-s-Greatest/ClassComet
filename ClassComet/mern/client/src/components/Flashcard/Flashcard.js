import React from 'react';

import { Card, Button, Label, Form } from 'semantic-ui-react';
import FlashcardDB from '../Flashcard/FlashcardDB.js';
import FlashcardViewer from '../Flashcard/FlashcardViewer.js';

class NewDeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>Add a new deck</Card.Header>
          <Card.Description>
            <Form
              onSubmit={ev => {
                ev.preventDefault();
                this.props.addDeck(this.state.name);
                this.setState({ name: '' });
              }}>
              <Form.Field
                control={Form.Input}
                placeholder="Deck Name"
                value={this.state.name}
                onChange={ev => {
                  this.setState({ name: ev.target.value });
                }}
              />
              <Button color="green" type="submit">
                ADD
              </Button>
            </Form>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

function Deck({ color, deckName, onSelect }) {
  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>{deckName}</Card.Header>
        <Card.Description>
          {FlashcardDB.getDeck(deckName)
            .slice(0, 3)
            .map((card, i) => <Label key={i}>{card.front}</Label>)}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic color="green" onClick={onSelect}>
          START
        </Button>
      </Card.Content>
    </Card>
  );
}

export default class Decks extends React.Component {
  static COLORS = ['red', 'purple', 'blue', 'orange', 'green', 'yellow'];
  constructor() {
    super();
    this.state = {
      decks: [],
      deckName: undefined
    };
    this.setDeckName = this.setDeckName.bind(this);
    this.addDeck = this.addDeck.bind(this);
  }
  componentDidMount() {
    this.loadDeck();
  }
  loadDeck() {
    this.setState({ decks: FlashcardDB.getDecks() });
  }
  setDeckName(deckName) {
    this.setState({ deckName });
  }
  addDeck(deckName) {
    FlashcardDB.addDeck(deckName);
    this.loadDeck();
  }
  render() {
    if (this.state.deckName) {
      return (
        <FlashcardViewer
          deckName={this.state.deckName}
          onBacktoList={() => this.setDeckName()}
        />
      );
    }

    return (
      <Card.Group>
        {this.state.decks.map((deckName, i) => (
          <Deck
            key={i}
            color={Decks.COLORS[i]}
            deckName={deckName}
            onSelect={() => this.setDeckName(deckName)}
          />
        ))}
        <NewDeckForm addDeck={this.addDeck} />
      </Card.Group>
    );
  }
}
