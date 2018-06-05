import React from 'react';

const cellStyle = {
  stroke: 'black',
  strokeWidth: 1
}


class Cell extends React.Component {
  /*
  props
    row: Number row number
    column: Number column number
    cellSide: Number side length (pixels)
    value: String value

  state
  */
  constructor(props) {
    super(props);
  }

  getPosition() {
    return {
      x: this.props.column * this.props.cellSide,
      y: this.props.row * this.props.cellSide,
      width: this.props.cellSide,
      height: this.props.cellSide
    }
  }

  render() {
    return (
      <rect { ...this.getPosition() } style={ cellStyle }>
        { this.props.value }
      </rect>
    );
  }
}

export default Cell;