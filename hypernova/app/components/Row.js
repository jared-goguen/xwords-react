import React from 'react';

import Cell from './Cell';

class Row extends React.Component {
  /*
  props
    index: Number row number
    answers: [ Character answer, ... ]
    clueMarkers: [ ClueMarkers clueMarker, ... ]
  state
  */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        { this.props.answers.map(
          (answers, i) => 
          <Cell 
            key={ i } 
            row={ this.props.index } 
            column={ i } 
            number={ this.props.clueMarkers[i] } 
            answer={ answers }
            active={ this.props.activeCells[i] }
          />
        ) }
      </tr>
    );
  }
}

export default Row;