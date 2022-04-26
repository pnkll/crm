import s from './Tasks.module.css'
import { NavLink } from 'react-router-dom'
import TaskPreview from './TaskPreview/TaskPreview'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getTasks } from '../../redux/thunks/tasksThunk'
import { getAuth, getUserId } from '../../redux/selectors/auth-selectors'
import { getNewestTasks } from '../../redux/selectors/tasks-selectors'

const Tasks = () => {

    const userId = useSelector(getUserId)
    const tasks = useSelector(getNewestTasks)
    const isAuth = useSelector(getAuth)
    useEffect(()=>{
       isAuth && dispatch(getTasks(userId)) 
    },[userId])
    const dispatch = useDispatch()
    

    

    return <>
        {tasks.map( e => <TaskPreview key={e._id}
        taskId={e._id}
        important={e.important} 
        theme={e.theme} 
        makerFirstname={e.maker.firstname}
        makerLastname={e.maker.lastname}
        respondents={e.respondents}/>)}
    </>
}

export default Tasks