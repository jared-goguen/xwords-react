import React from 'react';
import Row from './Row';

class Grid extends React.Component {
  /*
  props
    entries: [ String row, ... ]
    clueMarkers: [ [ ClueMarkers clueMarker, ... ] , ... ]

  state
  */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tdbody>
          { this.props.entries.map(
            (row, i) => 
            <Row key={i} index={i} clueMarkers={this.props.clueMarkers[i]} entries={row.split('')} />
          ) }
        </tdbody>
      </table>
    );
  }
}

export default Grid;