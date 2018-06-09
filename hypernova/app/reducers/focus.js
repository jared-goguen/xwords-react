const focus = (state={}, action) => {
  switch (action.type) {

    case 'SET_CLUE':
      return {row: action.row, column: action.column, direction: action.direction};

    case 'SET_CELL':
      return {...state, row: action.row, column: action.column};

    case 'TOGGLE_DIRECTION':
      let newDirection = state.direction === 'Down' ? 'Across' : 'Down';
      return {...state, direction: newDirection};

    default:
      return {row: 0, column: 0, direction: 'Across'}

    }
}

export default focus;
