import { initialState, states } from "./store.js"

/**
 * Returns a new state object which has added +1 to value
 * and printed to the console
 */
export const add = () => {
    return {
        ...states[0],
        value: states[0].value + 1,
    }
}

/**
 * Returns a new state object which has subtracted -1 to value
 * and printed to the console
 */
export const subtract = () => {
    return {
        ...states[0],
        value: states[0].value - 1,
    }
}

/**
 * Returns a new state object that has reset the value to 0
 * and printed to the console
 */
export const reset = () => {
    return {
        ...initialState
    }
}

export const getState = (index) => {
    console.log(states[0])
}