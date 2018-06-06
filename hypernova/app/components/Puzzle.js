import React from 'react';
import { renderReact } from 'hypernova-react';
import Grid from './Grid';
import Clues from './Clues';

class Puzzle extends React.Component {
  /*
  props
    title: String title
    date: String date
    size: { Number rows, Number columns }
    grid: [ String row, ... ]
    rebuses: [ Rebus rebus, ... ]
    clues: [ Clue clue, ... ]

  state
  */
  constructor(props) {
    super(props);
    this.clueMarkers = [...Array(this.props.size.rows)].map(u => []);
    for (let clue of this.props.clues) {
      let {row, column, number} = clue;
      this.clueMarkers[row][column] = number;
    }
  }


  render() {
    return (
      <div className='puzzle-holder'>
        <div className='grid-holder'>
          <Grid entries={this.props.grid} clueMarkers={this.clueMarkers} />
        </div>
        <div className='clues-holder'>
          <Clues clues={this.props.clues} />
        </div>
      </div>
    );
  }
}

export default renderReact('Puzzle', Puzzle);