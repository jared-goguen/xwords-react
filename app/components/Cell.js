import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const inputFilter = /^[A-Za-z0-9]$/;

const mapStateToProps = (state, prevProps) => {
  let entry = '';
  if ( typeof state.puzzle.entries !== 'undefined') {
    entry = state.puzzle.entries[prevProps.row][prevProps.column];
  } else {
    entry = '';
  }

  let focus = state.puzzle.row === prevProps.row && state.puzzle.column === prevProps.column;
  let showErrors = state.puzzle.showErrors;

  return { entry, focus, showErrors };
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
    entry: Character entry
  */
  constructor(props) {
    super(props);
    this.type = this.props.answer === '.' ? 'blank' : 'cell';
    this.autoFocus = this.props.row === 0 && this.props.column === 0;
    this.inputRef = React.createRef();

    this.updateMainState = (entry) => {
      this.props.updateEntry(this.props.row, this.props.column, entry);
    };

    this.keyHandlers = {
      ArrowUp: this.props.triggerMoveUp,
      ArrowDown: this.props.triggerMoveDown,
      ArrowLeft: this.props.triggerMoveLeft,
      ArrowRight: this.props.triggerMoveRight,
      Backspace: this.onBackspacePress,
      ' ': this.props.triggerToggle,
    };
  }

  onBackspacePress = () => {
    this.props.updateEntry('');
    this.props.triggerPreviousCell();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ( this.props.focus === nextProps.focus &&
         this.props.active === nextProps.active &&
         this.props.entry === nextProps.entry &&
         this.props.showErrors === nextProps.showErrors
      ) {
      return false;
    }

    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if ( this.props.focus ) {
      this.inputRef.current.focus();
    }
  }

  onChange = (event) => {
    event.preventDefault();
  }

  onClick = (event) => {
    if ( this.props.focus ) {
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
    let outerClassName = this.type;
    let innerClassName = 'cell-input '
    innerClassName += this.props.focus ? 'cell-highlight ' : '';
    innerClassName += this.props.active ? 'cell-active ' : '';

    if (
      this.props.showErrors &&
      this.props.entry !== '' && 
      this.props.entry !== null &&
      this.props.entry !== this.props.answer
    ) {
      innerClassName += 'cell-error ';
    }

    return (
      <td className={ outerClassName }>
        <div>
          { this.props.number !== undefined ? 
            <span className='clue-label'>{ this.props.number }</span> 
          : null }

          { this.type === 'cell' ? 
            <input 
              className={ innerClassName.trim() }
              type='text' 
              id={ 'cell-' + this.props.row + '-' + this.props.column } 
              maxLength='1'
              onFocus={ this.props.triggerFocus } 
              onMouseDown={ this.onClick } 
              onChange={ this.onChange }
              onKeyDown={ this.onKeyPress }
              ref={ this.inputRef }
              value={ this.props.entry }
              autoFocus={ this.autoFocus }
            /> 
          : null }
        </div>
      </td>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);