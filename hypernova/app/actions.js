export const SET_FOCUS = (row, column, direction) => {
    return {
        type: 'SET_FOCUS',
        row,
        column,
        direction
    }
}

export const TOGGLE_FOCUS = () => {
    return {
        type: 'TOGGLE_FOCUS'
    }
}