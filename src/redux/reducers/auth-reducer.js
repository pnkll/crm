import { createAction } from "@reduxjs/toolkit"
import { createReducer } from "@reduxjs/toolkit"


export const setAuth = createAction('SET_AUTH')
export const setError = createAction('SET_ERROR')

const initialState = {
    isAuth: false,
    userId: null,
    name: null,
    group: null,
    info: {
      firstname: null,
      lastname: null,
      company: null,
      position: null
    },
    errors: null
  }

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('SET_AUTH', (state = initialState, action) => {
      state.isAuth = action.payload.isAuth
      state.userId = action.payload.userId
      state.name = action.payload.name
      state.group = action.payload.group
      state.info.firstname = action.payload.info.firstname
      state.info.lastname = action.payload.info.lastname
      state.info.company = action.payload.info.company
      state.info.position = action.payload.info.position
    })
    .addCase('SET_ERROR', (state = initialState, action) =>{
      state.errors = action.payload
    })


})


export default authReducer