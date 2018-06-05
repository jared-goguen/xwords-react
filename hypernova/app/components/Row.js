import React from 'react';

import Cell from './Cell';

class Row extends React.Component {
  /*
  props
    index: Number row number
    cellSide: Number side length (pixels)
    entries: String cellEntries

  state
  */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.entries.map((entry, i) => <Cell key={i} row={this.props.index} column={i} cellSide={ this.props.cellSide } value={entry} />) }
      </div>
    );
  }
}

export default Row;