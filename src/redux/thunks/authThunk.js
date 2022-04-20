import { registration, getAuth, logout } from '../../axios/api'
import { login } from "../../axios/api"
import { setAuth, setError } from "../reducers/auth-reducer"




export const regThunk = (data) => async (dispatch) => {
    const response = await registration(data)
    console.log(response.data.message)
}

export const loginThunk = (data) => async (dispatch) => {
    const response = await login(data)
    localStorage.setItem('jwt', response.data.token)
    if (response.status === 200 && localStorage.jwt) {
        dispatch(checkAuth())
    }
    else (
        console.log(response)
    )
}

export const checkAuth = () => async (dispatch) => {
    const token = localStorage.getItem('jwt')
    const response = await getAuth(token)
    const info = {
        userId: response.data._id,
        email: response.data.email,
        firstname: response.data.firstName,
        lastname: response.data.lastName,
        role: response.data.roles,
    }
    dispatch(setAuth({ auth: true, info: info }))
}

export const logoutThunk = () => async (dispatch) => {
    const token = localStorage.getItem('jwt')
    const response = await logout(token)

    if(response.data.resultCode === 0){
    const info = {
        userId: null,
        email: null,
        firstname: null,
        lastname: null,
        role: null,
    }
    localStorage.setItem('jwt', null)
    dispatch(setAuth({ auth: false, info: info }))}
}