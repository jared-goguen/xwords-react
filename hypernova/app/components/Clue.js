import React from 'react';

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
    
  }

  render() {
    return (
      <li>
        <label htmlFor={'cell-' + this.props.row + '-' + this.props.column}>
          <b>{this.props.number}.</b>
          {this.props.text}
        </label>
      </li>
    );
  }
}

export default Clue;