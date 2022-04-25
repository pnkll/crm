import { getTask, tasks } from "../../axios/api"
import { selectTask, setTasks } from "../reducers/tasks-reducer"

export const getTasks = (userId) => async(dispatch) =>{
    const response = await tasks(userId)
    const newest = response.data.tasks.filter( e => e.status === 'new')
    const current = response.data.tasks.filter( e => e.status === 'current')
    const completed = response.data.tasks.filter( e => e.status === 'completed')
    const payload = {
        newest : newest,
        current : current,
        completed : completed
    }
    dispatch(setTasks(payload))
}

export const getTaskThunk = (taskId) => async(dispatch) =>{
    const response = await getTask(taskId)
    if (response.data.resultCode === 0){
        dispatch(selectTask(response.data.task))
    }
}