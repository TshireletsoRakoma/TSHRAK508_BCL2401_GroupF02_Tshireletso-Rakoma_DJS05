// index.js

import { Store, tallyReducer } from './files/store2.js';
import { createAddAction, createSubtractAction, createResetAction } from './files/ACTIONS2.js';

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

// SCENARIO 3: Decrementing the Counter
store.dispatch(createSubtractAction()); // Dispatch a SUBTRACT action
console.log('After SUBTRACT:', store.getState().count); // Logs the count after SUBTRACT: 1

// SCENARIO 4: Resetting the Counter
store.dispatch(createResetAction()); // Dispatch a RESET action
console.log('After RESET:', store.getState().count); // Logs the count after RESET: 0
