import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch, prevProps) => {
  return {
    onClueClick: (event) => {
      dispatch(actions.FOCUS_CLUE(prevProps.row, prevProps.column, prevProps.direction));
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
  */
  constructor(props) {
    super(props); 
    this.liRef = React.createRef();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.focus !== nextProps.focus;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if ( this.props.focus ) {
      this.liRef.current.scrollIntoViewIfNeeded(); 
    }
  }

  render() {
    let className = this.props.focus ? 'clue-highlight' : '';
    return (
      <li 
        onClick={ this.props.onClueClick } 
        className={ className } 
        ref={ this.liRef }
      >
        <label>
          <b>{ this.props.number }.</b>
          { this.props.text }
        </label>
      </li>
    );
  }
}

export default connect(null, mapDispatchToProps)(Clue);