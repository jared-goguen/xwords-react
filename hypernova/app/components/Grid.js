import React from 'react';

import Row from './Row';


class Grid extends React.Component {
  /*
  props
    clueMarkers: [ [ ClueMarkers clueMarker, ... ] , ... ]
    entries: [ [Entry, ... ] , ... ]
    active: [ [Boolean, ... ] , ... ]

  state
  */
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <table>
        <tbody className='grid-body'>
          { this.props.entries.map(
            (row, i) => 
            <Row 
              key={ i } 
              index={ i } 
              clueMarkers={ this.props.clueMarkers[i] } 
              entries={ row } 
              activeCells={ this.props.active[i] }
            />
          ) }
        </tbody>
      </table>
    );
  }
}

export default Grid;