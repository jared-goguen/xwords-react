import React from 'react';
import Cell from './Cell';

class Row extends React.Component {
  /*
  props
    index: Number row number
    entries: String cellEntries
    clueMarkers: [ ClueMarkers clueMarker, ... ]

  state
  */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        { this.props.entries.map(
          (entry, i) => 
          <Cell key={i} row={this.props.index} number={this.props.clueMarkers[i]} column={i} value={entry} />
        ) }
      </tr>
    );
  }
}

export default Row;