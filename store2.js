
    // Method to get the current state
    getState() {
        return this.state;
    }

      // Method to dispatch actions and update the state
      dispatch(action) {
        this.state = this.reducer(this.state, action); // Update state using the reducer
        this.listeners.forEach(listener => listener()); // Notify all listeners
    }
