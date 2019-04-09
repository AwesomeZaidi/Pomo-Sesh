import {NEW_TIMER, TOGGLE_TIMER, SELECT_TIMER} from '.';

// add a new timer object to an array of timer objects held by the store.
export const addTimer = (name) => {
    return {
      type: NEW_TIMER,
      payload: { name }
    }
}

// Starts or stops a timer. This requires the index of the timer.
export const toggleTimer = (index) => {
    return {
      type: TOGGLE_TIMER,
      payload: { index }
    }
}

// Selects a timer. Selecting a timer will display details about that timer.
// This requires the index of the timer.
export const selectTimer = (index) => {
    return {
      type: SELECT_TIMER,
      payload: { index }
    }
}

