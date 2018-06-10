import React from 'react';

import Row from './Row';


class Grid extends React.Component {
  /*
  props
    clueMarkers: [ [ ClueMarkers clueMarker, ... ] , ... ]
    answers: [ [Character answer, ... ] , ... ]
    active: [ [Boolean active, ... ] , ... ]
  */
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <table>
        <tbody className='grid-body'>
          { this.props.answers.map(
            (row, i) => 
            <Row 
              key={ i } 
              index={ i } 
              clueMarkers={ this.props.clueMarkers[i] } 
              answers={ row } 
              activeCells={ this.props.active[i] }
            />
          ) }
        </tbody>
      </table>
    );
  }
}

export default Grid;