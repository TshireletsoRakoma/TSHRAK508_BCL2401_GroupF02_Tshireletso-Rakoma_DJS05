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
