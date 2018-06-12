const getCellInfo = (entries, row, column) => {
  let rowArray = entries[row];
  
  if ( typeof rowArray === 'undefined' ) {
    return {open: false, valid: false, badIndex: true};
  }

  let entry = rowArray[column];
  
  if (typeof entry === 'undefined' ) {
    return {open: false, valid: false, badIndex: true};
  }

  if ( entry === null ) {
    return {open: false, valid: false, badIndex: false};
  }

  return {open: entry === '', valid: true, badIndex: false};
};


const nextOpenCellInClue = (entries, row, column, direction) => {
  let increment = () => (direction === 'Across' ? column++ : row++);

  let info;
  do {
    increment();
    info = getCellInfo(entries, row, column);
  } while ( !info.open  && info.valid )
  
  if ( info.valid ) {
    return { row, column };
  }

  return null;
}


const previousCellInClue = (entries, row, column, direction) => {
  let decrement = () => (direction === 'Across' ? column-- : row--);

  decrement();
  let info = getCellInfo(entries, row, column);

  if ( info.valid ) {
    return { row, column };
  }

  return null;
}


const cellUDLR = (entries, row, column, UDLR) => {
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
    info = getCellInfo(entries, row, column);
  } while ( !info.valid && !info.badIndex );

  if ( info.valid ) {
    return { row, column };
  }

  return null;
}


export default (state={}, action) => {
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
      let nextOpen = nextOpenCellInClue(state.entries, state.row, state.column, state.direction);
      if ( nextOpen !== null ) {
        return { ...state, row: nextOpen.row, column: nextOpen.column };
      }
      return { ...state };

    case 'PREVIOUS_CELL':
      let previous = previousCellInClue(state.entries, state.row, state.column, state.direction);
      if ( previous !== null ) {
        return { ...state, row: previous.row, column: previous.column };
      }
      return { ...state };

    case 'MOVE_UP':
      let upCell = cellUDLR(state.entries, state.row, state.column, 'Up');
      if ( upCell !== null ) {
        return { ...state, row: upCell.row, column: upCell.column };
      }
      return { ...state };

    case 'MOVE_DOWN':
      let downCell = cellUDLR(state.entries, state.row, state.column, 'Down');
      if ( downCell !== null ) {
        return { ...state, row: downCell.row, column: downCell.column };
      }
      return { ...state };

    case 'MOVE_LEFT':
      let leftCell = cellUDLR(state.entries, state.row, state.column, 'Left');
      if ( leftCell !== null ) {
        return { ...state, row: leftCell.row, column: leftCell.column };
      }
      return { ...state };

    case 'MOVE_RIGHT':
      let rightCell = cellUDLR(state.entries, state.row, state.column, 'Right');
      if ( rightCell !== null ) {
        return { ...state, row: rightCell.row, column: rightCell.column };
      }
      return { ...state };

    case 'SHOW_ERRORS':
      return { ...state, showErrors: action.enabled };

    default:
      return {
        row: 0, 
        column: 0, 
        direction: 'Across',
        entries: undefined,
        showErrors: false,
      }
    }
};
