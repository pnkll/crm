import { registration, getAuth, logout } from '../../axios/api'
import { login } from "../../axios/api"
import { setAuth, setError } from "../reducers/auth-reducer"




export const regThunk = (data) => async (dispatch) => {
    const response = await registration(data)
}

export const loginThunk = (data) => async (dispatch) => {
    const response = await login(data)
    localStorage.setItem('jwt', response.data.token)
    if (response.data.resultCode === 0 && localStorage.jwt) {
        dispatch(checkAuth())
    }
    else {
        dispatch(setError(response.data.message))
    }
}

export const checkAuth = () => async (dispatch) => {
    const token = localStorage.getItem('jwt')
    const response = await getAuth(token)
    console.log(response.data)
    const info = {
        userId: response.data._id,
        email: response.data.local.email,
        firstname: response.data.info.firstName,
        lastname: response.data.info.lastName,
        role: response.data.info.roles,
    }
    dispatch(setAuth({ auth: true, info: info }))
}

export const logoutThunk = () => async (dispatch) => {
    const token = localStorage.getItem('jwt')
    const response = await logout(token)

    if (response.data.resultCode === 0) {
        const info = {
            userId: null,
            email: null,
            firstname: null,
            lastname: null,
            role: null,
        }
        localStorage.setItem('jwt', null)
        dispatch(setAuth({ auth: false, info: info }))
    }
}