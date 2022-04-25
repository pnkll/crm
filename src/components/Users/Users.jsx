import { useEffect, useLayoutEffect } from "react"
import { useFieldArray } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { getUserId } from "../../redux/selectors/auth-selectors"
import { getUserList } from "../../redux/selectors/users-selectors"
import { getUsers } from "../../redux/thunks/usersThunk"
import User from "./User/User"
import s from './Users.module.css'

const Users = () =>{

    const dispatch = useDispatch()

    const users = useSelector(getUserList)
    const id = useSelector(getUserId)

    useEffect(()=>{
        dispatch(getUsers())
    },[])

    const userItem = users.filter(user => user._id!=id).map( u => <User key={u._id} firstName={u.info.firstName} lastName={u.info.lastName}/>)

    

    return <>
        <div className={s.container}>
            {userItem}
        </div>
    </>
}



export default Users