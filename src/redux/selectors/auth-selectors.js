export const getName = (state) => {
    return state.auth.name
}

export const getAuth = (state) => {
    return state.auth.isAuth
}

export const getLogin = (state) => {
    return state.auth.name
}

export const getError = (state) => {
    return state.auth.errors
}
export const getUserId = (state) => {
    return state.auth.info.userId
}


//временно
export const getFirstname = (state) => {
    return state.auth.info.firstname
}

export const getLastname = (state) => {
    return state.auth.info.lastname
}