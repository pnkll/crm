import { createAction } from "@reduxjs/toolkit"
import { createReducer } from "@reduxjs/toolkit"


export const setAuth = createAction('SET_AUTH')
export const setError = createAction('SET_ERROR')
export const logout = createAction('LOGOUT')

const initialState = {
  isAuth: false,
  info: {
    userId: null,
<<<<<<< HEAD
    name: null,
    group: null,
    info: {
      firstname: null,
      lastname: null,
      company: null,
      position: null
    },
=======
    email: null,
    firstName: null,
    lastName: null,
    role: null
  },
>>>>>>> 8652f4f89c996f1423a0e74f6f4bfd576bea5eaa
    errors: null
}

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('SET_AUTH', (state = initialState, action) => {
<<<<<<< HEAD
      state.isAuth = action.payload.isAuth
      state.userId = action.payload.userId
      state.name = action.payload.name
      state.group = action.payload.group
      state.info.firstname = action.payload.info.firstname
      state.info.lastname = action.payload.info.lastname
      state.info.company = action.payload.info.company
      state.info.position = action.payload.info.position
=======
      // state.isAuth = action.payload.isAuth
      // state.userId = action.payload.userId
      // state.name = action.payload.name
      // state.group = action.payload.group
      state.isAuth = true
      state.info = action.payload
>>>>>>> 8652f4f89c996f1423a0e74f6f4bfd576bea5eaa
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