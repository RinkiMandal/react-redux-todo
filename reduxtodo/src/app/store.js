import {configureStore} from '@reduxjs/toolkit';
// import todoReducer from '../features/todo/todoSlice';
import todoReducer from '../features/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})