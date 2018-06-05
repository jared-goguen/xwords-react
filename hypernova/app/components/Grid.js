import React from 'react';

import Row from './Row';

class Grid extends React.Component {
  /*
  props
    width: Number width (pixels)
    height: Number height (pixels)
    cellSide: Number side length (pixels)
    entries: [ String row... ]

  state
  */
  constructor(props) {
    super(props);
  }

  getViewBox() {
    return `0 0 ${this.props.width} ${this.props.height}`;
  }

  render() {
    return (
      <svg viewBox={ this.getViewBox() }>
        { this.props.entries.map((row, i) => <Row key={i} index={i} cellSide={ this.props.cellSide } entries={row.split('')} />) }
      </svg>
    );
  }
}

export default Grid;