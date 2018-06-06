const focus = (state={}, action) => {
  switch (action.type) {
    case 'SET_FOCUS':
      return {row: action.row, column: action.column, direction: action.direction};
    case 'TOGGLE_FOCUS':
      return {direction: state.direction === 'Down' ? 'Across' : 'Down'};
    default:
      return {row: 0, column: 0, direction: 'Across'}
    }
}

export default focus;
