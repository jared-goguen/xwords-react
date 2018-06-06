import React from 'react';
import ClueHolder from './ClueHolder';

class Clues extends React.Component {
  /*
  props
    clues: [ Clues clues, ... ]

  state
  */
  constructor(props) {
    super(props);
    this.acrossClues = [];
    this.downClues = [];
    for (let clue of this.props.clues) {
      if (clue.direction === 'Across') {
        this.acrossClues.push(clue);
      } else {
        this.downClues.push(clue);
      }
    }
  }

  render() {
    return (
      <div>
        <ClueHolder className='across-clues' title="Across" clues={this.acrossClues} />
        <ClueHolder className='down-clues' title="Down" clues={this.downClues} />
      </div>
    );
  }
}

export default Clues;