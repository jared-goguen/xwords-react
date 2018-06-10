export const INIT_STORE = (entries) => {
  return {
    type: 'INIT_STORE',
    entries,
  };
};

export const SET_ENTRY = (row, column, entry) => {
  return {
    type: 'SET_ENTRY',
    row,
    column,
    entry,
  }; 
};

export const FOCUS_CLUE = (row, column, direction) => {
  return {
    type: 'FOCUS_CLUE',
    row,
    column,
    direction,
  };
};

export const FOCUS_CELL = (row, column) => {
  return {
    type: 'FOCUS_CELL',
    row,
    column,
  };
};

export const TOGGLE_DIRECTION = () => {
  return {
    type: 'TOGGLE_DIRECTION',
  };
};

export const NEXT_CELL = () => {
  return {
    type: 'NEXT_CELL',
  };
};

export const PREVIOUS_CELL = () => {
  return {
    type: 'PREVIOUS_CELL',
  };
};

export const MOVE_UP = () => {
  return {
    type: 'MOVE_UP',
  };
};

export const MOVE_DOWN = () => {
  return {
    type: 'MOVE_DOWN',
  };
};

export const MOVE_LEFT = () => {
  return {
    type: 'MOVE_LEFT',
  };
};

export const MOVE_RIGHT = () => {
  return {
    type: 'MOVE_RIGHT',
  };
};