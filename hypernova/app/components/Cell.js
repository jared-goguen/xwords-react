import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {focus: state.focus}
}

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
    this.highlight = (
      this.props.focus.row === this.props.row && 
      this.props.focus.column === this.props.column
    );
    this.className = this.type + (this.highlight ? ' highlight' : '');
  }

  render() {
    return (
      <td className={ this.className }>
        <div>
          { this.props.number !== undefined ? 
            <span className='clue-label'>{this.props.number}</span> 
          : null }

          { this.type === 'cell' ? 
            <input type='text' id={'cell-' + this.props.row + '-' + this.props.column} maxLength='1' /> 
          : null }
        </div>
      </td>
    );
  }
}

export default connect(mapStateToProps)(Cell);