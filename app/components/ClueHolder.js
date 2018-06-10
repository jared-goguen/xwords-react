import React from 'react';
import Clue from './Clue';

class ClueHolder extends React.Component {
  /*
  props
    title: String title
    clues: [ Clues clues, ... ]
    clueRow: Number row of active clue
    clueColumn: Number column of active clue
    clueDirection: String direction of active clue
  */
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className='clue-holder'>
        <h3>{this.props.title}</h3>
        <ol>
          { this.props.clues.map(
            (clue, i) =>
            <Clue 
              key={ i } 
              focus={ 
                this.props.clueRow == clue.row &&
                this.props.clueColumn == clue.column &&
                this.props.clueDirection == clue.direction
              }
              { ...clue } 
            />
          ) }
        </ol>
      </div>
    );
  }
}

export default ClueHolder;