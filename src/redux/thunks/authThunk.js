<<<<<<< HEAD
import { auth, getUsers, login } from "../../axios/api"
=======
import { registration, getAuth } from '../../axios/api'
import { login } from "../../axios/api"
>>>>>>> 8652f4f89c996f1423a0e74f6f4bfd576bea5eaa
import { setAuth, setError } from "../reducers/auth-reducer"
// import { getAuth } from '../selectors/auth-selectors'


export const regThunk = (data) => async (dispatch) => {
    const response = await registration(data)
    console.log(response.data.message)
}

export const loginThunk = (data) => async (dispatch) => {
    const response = await login(data)
<<<<<<< HEAD
    localStorage.setItem('jwt', response.data.token)
    const rep = await auth()
    console.log(rep)
    // if (response.data.resultCode === 0){
    //     const user = response.data.user
    //     const state = {
    //         isAuth: true,
    //         userId: user._id,
    //         name: user.login,
    //         group: user.group,
    //         info: {
    //             firstname: user.info.firstname,
    //             lastname: user.info.lastname,
    //             company: user.info.company,
    //             position: user.info.position
    //           }              
    //     }
    //     localStorage.setItem('jwt', response.data.jwt)
    //     localStorage.setItem('id', response.data.user._id)
        // dispatch(setAuth(state))
    // } else if (response.data.resultCode === 1){
    //     dispatch(setError(response.data.message))
    // }
=======
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
>>>>>>> 8652f4f89c996f1423a0e74f6f4bfd576bea5eaa
}