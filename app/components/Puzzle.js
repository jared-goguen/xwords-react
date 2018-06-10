import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import focus from '../reducers/focus';

import PuzzleHolder from './PuzzleHolder';

const reducers = combineReducers({
   focus,
})

const store = createStore(reducers);

export default class Puzzle extends React.Component {
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
  }

  render() {
    return (
      <Provider store={ store }>
        <PuzzleHolder 
          title={ this.props.title }
          date={ this.props.date }
          size={ this.props.size }
          grid={ this.props.grid }
          rebuses={ this.props.rebuses }
          clues={ this.props.clues }
        />
      </Provider>
    );
  }
}
