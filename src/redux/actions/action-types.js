import {NEW_TIMER, TOGGLE_TIMER, SELECT_TIMER} from '.';

export const addTimer = (name) => {
    return {
      type: NEW_TIMER,
      payload: { name }
    }
}

export const toggleTimer = (index) => {
    return {
      type: TOGGLE_TIMER,
      payload: { index }
    }
}

export const selectTimer = (index) => {
    return {
      type: SELECT_TIMER,
      payload: { index }
    }
}