import React from 'react';
import ClueHolder from './ClueHolder';

class Clues extends React.Component {
  /*
  props
    clues: [ Clues clues, ... ]
    clueRow: Number row of active clue
    clueColumn: Number column of active clue
    clueDirection: String direction of active clue

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
        <ClueHolder 
          className='across-clues' 
          title='Across'
          clues={ this.acrossClues }
          clueRow={ this.props.clueRow }
          clueColumn={ this.props.clueColumn }
          clueDirection={ this.props.clueDirection }
        />
        <ClueHolder 
          className='down-clues' 
          title='Down' 
          clues={ this.downClues }
          clueRow={ this.props.clueRow }
          clueColumn={ this.props.clueColumn }
          clueDirection={ this.props.clueDirection }
        />
      </div>
    );
  }
}

export default Clues;