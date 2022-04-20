<<<<<<< HEAD
import { createAction } from "@reduxjs/toolkit"
import { createReducer } from "@reduxjs/toolkit"


export const initializeSuccess = createAction('INITIALIZE_SUCCESS')

const initialState = {
    initialized: false
  }

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('INITIALIZE_SUCCESS', (state = initialState, action) =>{
      state.initialized = true
    })
=======
import { createAction, createReducer } from "@reduxjs/toolkit";

export const initializedSuccess = createAction('INITIALIZED_SUCCESS')

const initialState = {
    appInitial: false
}

const appReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('INITIALIZED_SUCCESS', (state = initialState, action) => {
            state.appInitial = true
        })
>>>>>>> 8652f4f89c996f1423a0e74f6f4bfd576bea5eaa
})


export default appReducer