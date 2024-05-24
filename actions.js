// actions.js

// Factory function to create an ADD action
export function createAddAction() {
    return { type: 'ADD' };
}

// Factory function to create a SUBTRACT action
export function createSubtractAction() {
    return { type: 'SUBTRACT' };
}

// Factory function to create a RESET action
export function createResetAction() {
    return { type: 'RESET' };
}