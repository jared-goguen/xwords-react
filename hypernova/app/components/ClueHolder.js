import React from 'react';
import Clue from './Clue';

class ClueHolder extends React.Component {
  /*
  props
    title: String title
    clues: [ Clues clues, ... ]

  state
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
            <Clue key={i} {...clue} />
          ) }
        </ol>
      </div>
    );
  }
}

export default ClueHolder;