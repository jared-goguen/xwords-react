import React from 'react';
import { renderReact } from 'hypernova-react';

import Grid from './Grid';


class Puzzle extends React.Component {
  /*
  props
    title: String title
    date: String date
    size: { Number rows, Number columns }
    grid: [ String row... ]
    rebuses: [ Rebus rebus... ]
    clues: [ Clue clue... ]

  state
    width: Number width (pixels)
    height: Number height (pixels)
    cellSide: Number size length (pixels)
  */
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      cellSide: 0
    };
  }

  componentDidMount() {
    this.setState(this.getDimensions());
  }

  getDimensions() {
    let { rows, columns } = this.props.size;
    let baseWidth = window.innerWidth * 0.80;
    let baseHeight = window.innerHeight * 0.80;

    let rowWidth = baseWidth / columns;
    let rowHeight = baseHeight / rows;

    let cellSide = Math.min(rowHeight, rowWidth);
    let width = cellSide * columns;
    let height = cellSide * rows;

    return { width, height, cellSide };
  }

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <Grid 
          width={this.state.width} 
          height={this.state.height} 
          cellSide={this.state.cellSide} 
          entries={this.props.grid} 
        />
      </div>
    );
  }
}

export default renderReact('Puzzle', Puzzle);