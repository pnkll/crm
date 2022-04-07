import { login } from "../../axios/api"
import { setAuth, setError } from "../reducers/auth-reducer"

export const loginThunk = (data) => async (dispatch) => {
    const response = await login(data)
    if (response.data.resultCode === 0){
        const user = {
            isAuth: true,
            userId: response.data.user.id,
            name: response.data.user.login,
            group: response.data.user.group
        }
        dispatch(setAuth(user))
    } else if (response.data.resultCode === 1){
        dispatch(setError(response.data.message))
    }
}