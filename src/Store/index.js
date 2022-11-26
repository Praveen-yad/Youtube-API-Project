const { createSlice } = require('@reduxjs/toolkit')

const darkMode = createSlice({
    name: 'darkMode',
    initialState: true,
    reducers:{
        toggleDarkMode(state, action){
            return(
                !state
            )
        }
    }
})

export const { toggleDarkMode } = darkMode.actions;
export default darkMode.reducer;