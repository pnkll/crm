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
})


export default appReducer