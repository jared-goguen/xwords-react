import React from 'react';

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
    return (
      <td className={ this.type }>
        <div>
          { this.props.number !== undefined ? 
            <span className='clue-label'>{this.props.number}</span> 
          : null }

          { this.type === 'cell' ? 
            <input type='text' id={'cell-' + this.props.row + '-' + this.props.column} 
              maxLength='1' value={ this.props.value } /> 
          : null }
        </div>
      </td>
    );
  }
}

export default Cell;