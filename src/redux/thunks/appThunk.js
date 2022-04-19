import { initializedSuccess } from "../reducers/app-reducer"
import { checkAuth } from "./authThunk"

export const initializedApp = () => async (dispatch) =>{
    await dispatch(checkAuth())
    dispatch(initializedSuccess())
}