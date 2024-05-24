// store.js

// Define the Store class which will manage the state
export class Store {
    constructor(reducer) {
        this.state = undefined; // Initialize state as undefined
        this.reducer = reducer; // Assign the reducer function
        this.listeners = []; // Initialize an empty array for listeners
        this.dispatch({}); // Initialize the state by dispatching an empty action
    }

    // Method to get the current state
    getState() {
        return this.state;
    }

    // Method to dispatch actions and update the state
    dispatch(action) {
        this.state = this.reducer(this.state, action); // Update state using the reducer
        this.listeners.forEach(listener => listener()); // Notify all listeners
    }

    // Method to subscribe to state changes
    subscribe(listener) {
        this.listeners.push(listener); // Add the listener to the array
        return () => {
            // Return a function to unsubscribe the listener
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
}

// Define the reducer function which handles actions and updates the state
export function tallyReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'ADD':
            return { count: state.count + 1 }; // Increment count
        case 'SUBTRACT':
            return { count: state.count - 1 }; // Decrement count
        case 'RESET':
            return { count: 0 }; // Reset count to 0
        default:
            return state; // Return the current state for unknown actions
    }
}
