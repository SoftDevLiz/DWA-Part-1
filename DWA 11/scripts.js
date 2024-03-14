// Own version of global store
// A way to Subscribe (listen for specific actions that happen in the store)
// A way to Dispatch (A way to dispatch/notify the store of actions)
// Use functional programming
// No Html, no CSS - just the store, log to the console

/*
    I'm gonna have a STORE which will need a way for the app to send messages to it,
    and a way to send messages (UPDATE / DISPATCH). The store is global, so I should be able to
    pull the store in at any place and send messages to it (SUBSCRIBE)
*/

/*
    Initial State:

    const state = {
        value: 0;
        console.log: empty;
    }

    State needs to update when:

        1. value is increased
                state = {
                    value: 1;
                    console.log: 1;
                }
        2. value is decreased
                state = {
                    value: 0 (or -1);
                    console.log: 1 (2?);
                }
        3. value is reset
                state = {
                    value: 0;
                    console.log: empty;
                }

    These are all button clicks, so STORE will listen to UPDATE state every time this happens from a SUBSCRIBER,
    and STORE will return a new state object in order to track different app states.

    I need a getState() function which logs the current state to the console.
*/

import { getState, add, reset, subtract } from "./actions.js";
import { update } from "./store.js";

getState();

update(add);
update(add);

getState();

update(subtract)

getState()

update(reset);

getState();





