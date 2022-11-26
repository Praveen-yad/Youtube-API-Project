import { combineReducers } from "@reduxjs/toolkit";
import liked from './indexs'
import darkMode from './index'

export default combineReducers({
    likedVid: liked,
    darkMode: darkMode,
})