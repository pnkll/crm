import { initializedSuccess } from "../reducers/app-reducer"
import { checkAuth } from "./authThunk"
import { getTasks } from "./tasksThunk"

export const initializedApp = () => async (dispatch) => {
    const token = localStorage.getItem('jwt')
    // console.log('hello')
    if (token != 'null') {
        await dispatch(checkAuth())
        dispatch(initializedSuccess())
    }
    else{dispatch(initializedSuccess())}
}