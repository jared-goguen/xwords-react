const cellOpen = (entries, row, column) => {
  let rowArray = entries[row];
  
  if ( typeof rowArray === 'undefined' ) {
    return {open: false, badIndex: true};
  }

  let entry = rowArray[column];
  
  if (typeof entry === 'undefined' ) {
    return {open: false, badIndex: true};
  }

  if ( entry === null ) {
    return {open: false};
  }

  return {open: entry === ''};
};


const cellValid = (entries, row, column) => {
  let rowArray = entries[row];
  
  if ( typeof rowArray === 'undefined' ) {
    return {valid: false, badIndex: true};
  }

  let entry = rowArray[column];
  
  if (typeof entry === 'undefined' ) {
    return {valid: false, badIndex: true};
  }

  if ( entry === null ) {
    return {valid: false};
  }

  return {valid: true};
};


const nextOpenCell = (entries, row, column, direction) => {
  let rows = entries.length;
  let columns = entries[0].length;

  let incrementX = () => (direction === 'Across' ? column++ : row++);
  let incrementY = () => (direction === 'Across' ? row++ : column++);
  let resetX = () => (direction === 'Across' ? column = 0 : row = 0);

  incrementX();
  
  let info = cellOpen(entries, row, column);
  while ( !info.open  && ( row < rows - 1 || column < columns - 1 ) ) {
    if ( info.badIndex ) {
      resetX();
      incrementY();
    } else {
      incrementX();
    }
    info = cellOpen(entries, row, column);
  }

  if ( row < rows && column < columns) {
    return { row, column };
  }
  return null;
};


const previousCell = (entries, row, column, direction) => {
  let rows = entries.length;
  let columns = entries[0].length;

  let decrementX = () => (direction === 'Across' ? column-- : row--);
  let decrementY = () => (direction === 'Across' ? row-- : column--);
  let resetX = () => (direction === 'Across' ? column = columns - 1 : row = rows - 1);

  decrementX();
    
  let info = cellValid(entries, row, column);
  while ( !info.valid  && ( row > 0 || column > 0 ) ) {
    if ( info.badIndex ) {
      resetX();
      decrementY();
    } else {
      decrementX();
    }
    info = cellValid(entries, row, column);
  }

  if ( row >= 0 && column >= 0 ) {
    return { row, column };
  }
  return null;
};


const cellInUDLR = (entries, row, column, UDLR) => {
  let incrementor = {
    Up: () => row--,
    Down: () => row++,
    Left: () => column--,
    Right: () => column++,
  }[UDLR];

  let rows = entries.length;
  let columns = entries[0].length;

  let info;
  do {
    incrementor();
    info = cellValid(entries, row, column);
  } while ( !info.valid && 0 <= row && row < rows && 0 <= column && column < columns );

  if ( 0 <= row && row < rows && 0 <= column && column < columns ) {
    return { row, column };
  }
  return null;
}


const focus = (state={}, action) => {
  switch (action.type) {

    case 'INIT_STORE':
      return { ...state, entries: action.entries.map(row => row.map(column => column)) }

    case 'SET_ENTRY':
      let entriesCopy = state.entries.map(row => row.map(column => column));
      entriesCopy[action.row][action.column] = action.entry.toUpperCase();
      return { ...state, entries: entriesCopy };

    case 'FOCUS_CLUE':
      return { ...state, row: action.row, column: action.column, direction: action.direction };

    case 'FOCUS_CELL':
      return { ...state, row: action.row, column: action.column };

    case 'TOGGLE_DIRECTION':
      let newDirection = state.direction === 'Down' ? 'Across' : 'Down';
      return { ...state, direction: newDirection };

    case 'NEXT_CELL':
      let nextOpen = nextOpenCell(state.entries, state.row, state.column, state.direction);
      if ( nextOpen !== null ) {
        return { ...state, row: nextOpen.row, column: nextOpen.column };
      }
      return { ...state };

    case 'PREVIOUS_CELL':
      let previous = previousCell(state.entries, state.row, state.column, state.direction);
      if ( previous !== null ) {
        return { ...state, row: previous.row, column: previous.column };
      }
      return { ...state };

    case 'MOVE_UP':
      let upCell = cellInUDLR(state.entries, state.row, state.column, 'Up');
      if ( upCell !== null ) {
        return { ...state, row: upCell.row, column: upCell.column };
      }
      return { ...state };

    case 'MOVE_DOWN':
      let downCell = cellInUDLR(state.entries, state.row, state.column, 'Down');
      if ( downCell !== null ) {
        return { ...state, row: downCell.row, column: downCell.column };
      }
      return { ...state };

    case 'MOVE_LEFT':
      let leftCell = cellInUDLR(state.entries, state.row, state.column, 'Left');
      if ( leftCell !== null ) {
        return { ...state, row: leftCell.row, column: leftCell.column };
      }
      return { ...state };

    case 'MOVE_RIGHT':
      let rightCell = cellInUDLR(state.entries, state.row, state.column, 'Right');
      if ( rightCell !== null ) {
        return { ...state, row: rightCell.row, column: rightCell.column };
      }
      return { ...state };

    default:
      return {
        row: 0, 
        column: 0, 
        direction: 'Across',
        entries: undefined,
      }
    }
}

export default focus;
