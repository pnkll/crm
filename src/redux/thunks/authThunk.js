import { auth, getUsers, login } from "../../axios/api"
import { setAuth, setError } from "../reducers/auth-reducer"

export const loginThunk = (data) => async (dispatch) => {
    const response = await login(data)
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
}