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
          <Cell 
            key={ i } 
            row={ this.props.index } 
            column={ i } 
            number={ this.props.clueMarkers[i] } 
            value={ entry } 
            active={ this.props.activeCells[i] }
          />
        ) }
      </tr>
    );
  }
}

export default Row;