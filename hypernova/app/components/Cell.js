import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const inputFilter = /^[A-Za-z0-9]$/;

const mapStateToProps = (state, prevProps) => {
  let entry = '';
  if ( typeof state.focus.entries !== 'undefined') {
    entry = state.focus.entries[prevProps.row][prevProps.column];
  } else {
    entry = '';
  }

  let focus = state.focus.row === prevProps.row && state.focus.column === prevProps.column;

  return { entry, focus };
};

const mapDispatchToProps = (dispatch, prevProps) => {
  return {

    updateEntry: (value) => {
      if ( value.length == 0 || value.match(inputFilter) ) {
        dispatch(actions.SET_ENTRY(prevProps.row, prevProps.column, value));
      }
    },

    triggerFocus: (event) => {
      dispatch(actions.FOCUS_CELL(prevProps.row, prevProps.column));
    },

    triggerToggle: (event) => {
      dispatch(actions.TOGGLE_DIRECTION());
    },

    triggerNextCell: () => {
      dispatch(actions.NEXT_CELL());
    },

    triggerPreviousCell: () => {
      dispatch(actions.PREVIOUS_CELL());
    },

    triggerMoveUp: () => {
      dispatch(actions.MOVE_UP()); 
    },

    triggerMoveDown: () => {
      dispatch(actions.MOVE_DOWN()); 
    },

    triggerMoveLeft: () => {
      dispatch(actions.MOVE_LEFT()); 
    },

    triggerMoveRight: () => {
      dispatch(actions.MOVE_RIGHT()); 
    },

  }
};

class Cell extends React.Component {
  /*
  props
    row: Number row number
    column: Number column number
    number: Number clue number
    focus: Boolean focused
    active: Boolean in current clue
    answer: Character answer
  */
  constructor(props) {
    super(props);
    this.type = this.props.answer === '.' ? 'blank' : 'cell';

    this.updateMainState = (entry) => {
      this.props.updateEntry(this.props.row, this.props.column, entry);
    };

    this.keyHandlers = {
      ArrowUp: this.props.triggerMoveUp,
      ArrowDown: this.props.triggerMoveDown,
      ArrowLeft: this.props.triggerMoveLeft,
      ArrowRight: this.props.triggerMoveRight,
      Backspace: this.onBackspacePress
    };

    this.inputRef = React.createRef();
    this.previousFocus = false;
  }

  onBackspacePress = () => {
    this.props.updateEntry('');
    this.props.triggerPreviousCell();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ( this.props.focus === nextProps.focus &&
         this.props.active === nextProps.active &&
         this.props.entry === nextProps.entry
      ) {
      return false;
    }

    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if ( this.props.focus ) {
      this.inputRef.current.focus();
    }
    this.previousFocus = this.props.focus;
  }

  onChange = (event) => {
    event.preventDefault();
  }

  onClick = (event) => {
    if ( this.previousFocus ) {
      this.props.triggerToggle();
    }
  }

  onKeyPress = (event) => {
    let key = event.key;   
    let keyHandler = this.keyHandlers[key];

    if (typeof keyHandler !== 'undefined') {
      return keyHandler();
    }

    if ( key.match(inputFilter) ) {
      this.props.updateEntry(key);
      this.props.triggerNextCell();
    }
  }

  render() {
    let className = this.type;
    className += this.props.focus ? ' cell-highlight' : '';
    className += this.props.active ? ' cell-active' : '';

    return (
      <td className={ className }>
        <div>
          { this.props.number !== undefined ? 
            <span className='clue-label'>{ this.props.number }</span> 
          : null }

          { this.type === 'cell' ? 
            <input 
              type='text' 
              id={ 'cell-' + this.props.row + '-' + this.props.column } 
              maxLength='1'
              onFocus={ this.props.triggerFocus } 
              onMouseDown={ this.onClick } 
              onChange={ this.onChange }
              onKeyDown={ this.onKeyPress }
              ref={ this.inputRef }
              value={ this.props.entry }
            /> 
          : null }
        </div>
      </td>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);