import React from 'react';
import store from '../store';
import * as actions from '../actions';

class Clue extends React.Component {
  /*
  props
    row: Number row number
    column: Number column number
    number: String clue number
    direction: String clue direction
    answer: String clue answer
    text: String clue text

  state
  */
  constructor(props) {
    super(props); 
    console.log(store);
  }

  setFocus(event) {
    store.dispatch(actions.SET_FOCUS(this.props.row, this.props.column, this.props.direction));
  }

  render() {
    return (
      <li onClick={this.setFocus}>
        <label>
          <b>{this.props.number}.</b>
          {this.props.text}
        </label>
      </li>
    );
  }
}

export default Clue;