import React from 'react';
import { connect } from 'react-redux';

import Grid from './Grid';
import Clues from './Clues';

const cellIsTrue = (grid, row, column) => {
  let rowArray = grid[row];
  if ( typeof rowArray === 'undefined' ) {
    return false;
  }
  return rowArray[column];
}

const mapStateToProps = (state, props) => {
  let { row, column, direction } = state.focus;


 let adjacency = props.grid.map(row => row.split('').map(
                  cell => true ? cell !== '.' : false));

  let incrementor = () => (direction === 'Across' ? column++ : row++);
  let decrementor = () => (direction === 'Across' ? column-- : row--);
  let active = adjacency.map(row => row.map(cell => false));

  // iterate back until first cell not in clue  
  while( cellIsTrue(adjacency, row, column) ) {
    decrementor();
  }

  incrementor();  // get back to first cell in clue
  let clueRow = row, clueColumn = column, clueDirection = direction;

  while( cellIsTrue(adjacency, row, column) ) {
    active[row][column] = true;
    incrementor();
  }

  return { active, clueRow, clueColumn, clueDirection };
}

class PuzzleHolder extends React.Component {
  /*
  props
    title: String title
    date: String date
    size: { Number rows, Number columns }
    grid: [ String row, ... ]
    rebuses: [ Rebus rebus, ... ]
    clues: [ Clue clue, ... ]
    active: [ [Boolean, ... ] , ... ]
    clueRow: Number row of active clue
    clueColumn: Number column of active clue
    clueDirection: String direction of active clue

  state
  */
  constructor(props) {
    super(props);
    this.clueMarkers = [ ...Array(this.props.size.rows) ].map(u => []);

    for (let clue of this.props.clues) {
      let { row, column, number } = clue;
      this.clueMarkers[row][column] = number;
    }

    this.entries = this.props.grid.map(row => row.split(''));
  }

  render() {
    return (
      <div className='puzzle-holder'>

        <div className='grid-holder'>
          <Grid 
            clueMarkers={ this.clueMarkers } 
            entries={ this.entries } 
            active={ this.props.active } 
          />
        </div>

        <div className='clues-holder'>
          <Clues 
            clues={ this.props.clues } 
            clueRow={ this.props.clueRow }
            clueColumn={ this.props.clueColumn }
            clueDirection={ this.props.clueDirection }
          />
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps)(PuzzleHolder);