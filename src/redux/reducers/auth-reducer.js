import { createAction } from "@reduxjs/toolkit"
import { createReducer } from "@reduxjs/toolkit"


export const setAuth = createAction('SET_AUTH')

const initialState = [
  {
    isAuth: false,
    userId: null,
    name: null,
    group: null
  }
]

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('SET_AUTH', (state = initialState, action) => {
      state[0] = action.payload
    })
})


export default authReducer