const { createSlice } = require('@reduxjs/toolkit')

const liked = createSlice({
    name: 'liked',
    initialState: [],
    reducers:{
        likedVideos(state, action){
            state.push(action.payload)
        }
    }
})

export const { likedVideos } = liked.actions;
export default liked.reducer;