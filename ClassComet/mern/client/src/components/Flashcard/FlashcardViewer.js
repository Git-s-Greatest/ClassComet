import React from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';
import FlashcardDB from '../Flashcard/FlashcardDB.js';

class AddCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      front: '',
      back: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }
  onSubmit(ev) {
    ev.preventDefault();
    this.props.addCard(this.state.front, this.state.back);
    this.setState({
      front: '',
      back: ''
    });
  }
  render() {
    return (
      <Segment>
        <h3>Add a new card</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Front"
              value={this.state.front}
              name="front"
              onChange={this.handleChange}
            />
            <Form.Input
              label="Back"
              name="back"
              value={this.state.back}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">ADD</Button>
        </Form>
      </Segment>
    );
  }
}

export default class FlashcardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      page: 1,
      isFront: true
    };
    this.addCard = this.addCard.bind(this);
  }
  componentDidMount() {
    this.getCards();
  }
  getCards() {
    this.setState({ cards: FlashcardDB.getDeck(this.props.deckName) });
  }
  addCard(front, back) {
    FlashcardDB.addCard(this.props.deckName, front, back);
    this.getCards();
  }
  render() {
    return (
      <div className="FlashcardViewer">
        <div>
          <Button
            primary
            onClick={() => {
              this.setState(state => ({
                page: Math.max(state.page - 1, 1),
                isFront: true
              }));
            }}>
            Prev
          </Button>
          <Button
            primary
            onClick={() => {
              this.setState(state => ({
                page: Math.min(state.page + 1, this.state.cards.length),
                isFront: true
              }));
            }}>
            Next
          </Button>
          <Button
            secondary
            onClick={() => {
              this.setState(state => ({ isFront: !state.isFront }));
            }}>
            Flip
          </Button>
        </div>
        <Segment attached="top">
          {this.state.page} of {this.state.cards.length}
        </Segment>
        <Segment attached stacked inverted={!this.state.isFront}>
          <div className="cardContent">
            {this.state.cards.length === 0 && 'Empty'}
            {this.state.cards.length > 0 &&
              this.state.isFront && (
                <h1>{this.state.cards[this.state.page - 1].front}</h1>
              )}
            {this.state.cards.length > 0 &&
              !this.state.isFront && (
                <h1>{this.state.cards[this.state.page - 1].back}</h1>
              )}
          </div>
        </Segment>
        <div style={{ marginTop: '30px' }}>
        <AddCardForm addCard={this.addCard} />

        </div>

        <div style={{ height: '50px' }} />
        <Button primary onClick={this.props.onBacktoList}>
            Go Back to Decks
          </Button>
      </div>
    );
  }
}
