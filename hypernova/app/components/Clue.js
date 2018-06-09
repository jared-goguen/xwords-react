import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClueClick: () => {
      document.getElementById(`cell-${props.row}-${props.column}`).focus();
      dispatch(actions.SET_CLUE(props.row, props.column, props.direction));
    }
  }
};

class Clue extends React.Component {
  /*
  props
    row: Number row number
    column: Number column number
    number: String clue number
    direction: String clue direction
    answer: String clue answer
    text: String clue text
    focus: Boolean active clue

  state
  */
  constructor(props) {
    super(props); 
  }

  render() {
    let className = this.props.focus ? 'clue-highlight' : '';
    return (
      <li onClick={ this.props.onClueClick } className={ className } >
        <label>
          <b>{ this.props.number }.</b>
          { this.props.text }
        </label>
      </li>
    );
  }
}

export default connect(null, mapDispatchToProps)(Clue);