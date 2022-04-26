import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getAuth } from "../../../redux/selectors/auth-selectors"
import { getSelectedTask, getTasks } from "../../../redux/selectors/tasks-selectors"
import { getTaskThunk } from "../../../redux/thunks/tasksThunk"

const Task = (props) => {

    const params = useParams()
    const dispatch = useDispatch()

    const isAuth = useSelector(getAuth)

    useEffect(()=>{
        isAuth && dispatch(getTaskThunk(params.id))
    },[isAuth])

    const task = useSelector(getSelectedTask)
    
    if (!task){
        return <>Загружаем..</>
    }

    return <>
    Задача<br/>
    {task.message}
    </>
}

export default Task