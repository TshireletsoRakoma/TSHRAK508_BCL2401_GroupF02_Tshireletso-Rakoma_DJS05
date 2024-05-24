
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