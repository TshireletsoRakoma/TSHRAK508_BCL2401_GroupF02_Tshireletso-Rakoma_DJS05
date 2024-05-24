// index.js

import { Store, tallyReducer } from './store2.js';
import { createAddAction, createSubtractAction, createResetAction } from './actions.js';

// Create a new store using the tallyReducer
const store = new Store(tallyReducer);

// Subscribe to state changes and log only the count to the console
store.subscribe(() => {
    console.log(store.getState().count); // Log only the count property
});

// SCENARIO 1: Initial State Verification
console.log('Initial State:', store.getState().count); // Logs the initial count: 0

// SCENARIO 2: Incrementing the Counter
store.dispatch(createAddAction()); // Dispatch an ADD action
console.log('After ADD 1:', store.getState().count); // Logs the count after first ADD: 1
store.dispatch(createAddAction()); // Dispatch another ADD action
console.log('After ADD 2:', store.getState().count); // Logs the count after second ADD: 2
