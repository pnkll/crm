import { usersList } from "../../axios/api"
import { setUsers } from "../reducers/users-reducer"

export const getUsers = () => async (dispatch) =>{
    const response = await usersList()
    if (response.data.resultCode === 0){
        dispatch(setUsers(response.data.users))
    }
}