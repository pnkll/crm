import { createAction, createReducer } from "@reduxjs/toolkit";

export const setTasks = createAction('SET_TASKS')
export const selectTask = createAction('SELECT_TASK')

const initialState = {
    current: [],
    completed: [],
    newest: [],
    selectedTask: null
}

const tasksReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase('SET_TASKS', (state=initialState, action)=>{
        state.current = action.payload.current
        state.completed = action.payload.completed
        state.newest = action.payload.newest
    })
    .addCase('SELECT_TASK', (state=initialState, action)=>{
        state.selectedTask = action.payload
    })
})

export default tasksReducer