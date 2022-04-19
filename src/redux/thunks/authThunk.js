import { registration, getAuth } from '../../axios/api'
import { login } from "../../axios/api"
import { setAuth, setError } from "../reducers/auth-reducer"
// import { getAuth } from '../selectors/auth-selectors'


export const regThunk = (data) => async (dispatch) => {
    const response = await registration(data)
    console.log(response.data.message)
}

export const loginThunk = (data) => async (dispatch) => {
    const response = await login(data)
    await localStorage.setItem('jwt', response.data.token)
    if (response.status === 200) {
        dispatch(checkAuth())
    }
    else (
        console.log(response)
    )
}

export const checkAuth = () => async (dispatch) => {
    const response = await getAuth()
    console.log(response)
    const info = {
        userId: response.data._id,
        email: response.data.email,
        firstname: response.data.firstName,
        lastname: response.data.lastName,
        role: response.data.roles,
    }
    dispatch(setAuth(info))
}