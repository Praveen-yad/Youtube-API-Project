import { configureStore } from '@reduxjs/toolkit'
import  reducer  from './combinedStore';

const store = configureStore({
    reducer
})

export default store;