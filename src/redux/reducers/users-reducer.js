const { createReducer, createAction } = require("@reduxjs/toolkit");

export const setUsers = createAction('SET_USERS')

const initialState = {
    userList: []
}

const usersReducer = createReducer(initialState, (builder) => {
    builder
    .addCase('SET_USERS', (state = initialState, action) =>{
        state.userList = action.payload
    })
})

export default usersReducer