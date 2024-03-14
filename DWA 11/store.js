// Defines the initial state
export const initialState = {
    value: 0,
};

// Slots the initial state into an array
export const states = [initialState];

// functions that are subscribed to the store
export let subscribers = [];

/**
 * Runs an action and returns a new state object 
 * and pushes the object to the `states` array.
 */
export const update = (action) => {

    // Retrieves previous state 
    const prev = states[0];

    // Slots the new state into next
    const next = action();

    // ???
    const handler = (notify) => notify(prev, next)
    subscribers.forEach(handler)
    
    // Side-effect?
    states.unshift(next);
}

// Side-effect?
export const subscribe = (notify) => {
    subscribers.push(notify);

    const unsubscribe = () => {
        const handler = (current) => current !== notify
        const result = subscribers.filter(handler)
        subscribers = result;
    }

    return unsubscribe;
   
    }

