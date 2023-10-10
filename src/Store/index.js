// Import the 'createSlice' function from '@reduxjs/toolkit'
const { createSlice } = require('@reduxjs/toolkit');

// Create a slice named 'darkMode' using 'createSlice'
const darkMode = createSlice({
    // Specify the name of the slice
    name: 'darkMode',
    
    // Initialize the initial state to 'true', indicating dark mode is initially enabled
    initialState: true,
    
    // Define reducers, which are functions that update the state
    reducers: {
        // Define a 'toggleDarkMode' reducer function that takes 'state' and 'action' as arguments
        toggleDarkMode(state, action) {
            // Invert the current value of 'state' to toggle between dark and light mode
            return !state;
        }
    }
})

// Export the 'toggleDarkMode' action creator, which allows you to dispatch the 'toggleDarkMode' action
export const { toggleDarkMode } = darkMode.actions;

// Export the 'darkMode' reducer, which handles state updates based on dispatched actions
export default darkMode.reducer;
