export const SET_CLUE = (row, column, direction) => {
    return {
        type: 'SET_CLUE',
        row,
        column,
        direction
    }
}

export const SET_CELL = (row, column) => {
    return {
        type: 'SET_CELL',
        row,
        column,
    }
}

export const TOGGLE_DIRECTION = () => {
    return {
        type: 'TOGGLE_DIRECTION'
    }
}