import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state, props) => {
  return {
    focus: state.focus.row === props.row &&
           state.focus.column === props.column
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCellFocus: (event) => {
      dispatch(actions.SET_CELL(props.row, props.column));
    },
    onCellDoubleClick: () => {
      dispatch(actions.TOGGLE_DIRECTION());
    }
  }
};

class Cell extends React.Component {
  /*
  props
    row: Number row number
    column: Number column number
    number: Number clue number
    value: String value

  state
  */
  constructor(props) {
    super(props);
    this.type = this.props.value === '.' ? 'blank' : 'cell'
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
              onFocus={ this.props.onCellFocus } 
              onDoubleClick={ this.props.onCellDoubleClick } 
            /> 
          : null }
        </div>
      </td>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);