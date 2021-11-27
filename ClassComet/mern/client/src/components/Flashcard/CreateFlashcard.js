import React from "react";
import { Segment, Form, Input, Button, Header, Icon } from "semantic-ui-react";

export default class CreateFlashcard extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: [],
      front: "",
      back: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }
  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  add() {
    let newCard = {
      front: this.state.front,
      back: this.state.back
    };
    this.setState(state => ({
      deck: [...state.deck, newCard],
      deckName: "",
      front: "",
      back: ""
    }));
  }
  render() {
    return (
      <div>
        <Header as="h3" icon textAlign="center">
          <Icon name="add" circular />
          <Header.Content>Create a deck</Header.Content>
        </Header>
        <Segment inverted>
          <Form inverted>
            <Form.Input
              name="deckName"
              label="Deck Name"
              type="text"
              onChange={this.handleChange}
            />

            {this.state.deck.map((card, i) => (
              <Form.Group widths="equal">
                <Form.Field
                  name="front"
                  control={Input}
                  label="Front"
                  type="text"
                  onChange={this.handleChange}
                />
                <Form.Field
                  name="back"
                  control={Input}
                  label="Back"
                  type="text"
                  onChange={this.handleChange}
                />
              </Form.Group>
            ))}

            <Form.Group widths="equal">
              <Form.Field
                name="front"
                control={Input}
                label="Front"
                type="text"
                onChange={this.handleChange}
              />
              <Form.Field
                name="back"
                control={Input}
                label="Back"
                type="text"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button primary onClick={this.add}>
              ADD
            </Button>
            <br />
            <br />
          </Form>
        </Segment>
        <Form.Field control={Button} content="SUBMIT" />
      </div>
    );
  }
}
