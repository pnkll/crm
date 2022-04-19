import { createAction } from "@reduxjs/toolkit"
import { createReducer } from "@reduxjs/toolkit"


export const setAuth = createAction('SET_AUTH')
export const setError = createAction('SET_ERROR')
export const logout = createAction('LOGOUT')

const initialState = {
  isAuth: false,
  info: {
    userId: null,
    email: null,
    firstName: null,
    lastName: null,
    role: null
  },
    errors: null
}

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('SET_AUTH', (state = initialState, action) => {
      // state.isAuth = action.payload.isAuth
      // state.userId = action.payload.userId
      // state.name = action.payload.name
      // state.group = action.payload.group
      state.isAuth = true
      state.info = action.payload
    })
    .addCase('SET_ERROR', (state = initialState, action) => {
      state.errors = action.payload
    })
    .addCase('LOGOUT', (state = initialState, action) =>{
      state.isAuth = false
      state.info = {
        userId: null,
        email: null,
        firstName: null,
        lastName: null,
        role: null
      }
    })


})


export default authReducer