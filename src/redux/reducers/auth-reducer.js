import { createAction } from "@reduxjs/toolkit"
import { createReducer } from "@reduxjs/toolkit"


export const setAuth = createAction('SET_AUTH')

const initialState = {
    isAuth: false,
    userId: null,
    name: null,
    group: null
  }

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('SET_AUTH', (state = initialState, action) => {
      state.isAuth = action.payload.isAuth
      state.userId = action.payload.userId
      state.name = action.payload.name
      state.group = action.payload.group
    })
})


export default authReducer