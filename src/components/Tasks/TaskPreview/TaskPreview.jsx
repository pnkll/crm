import s from './TaskPreview.module.css'
import flame from '../../../common/images/flame.png'
import { NavLink, Route, Routes } from 'react-router-dom'
import Task from '../Task/Task' 

const TaskPreview = (props) => {

    const url = `../task/${props.taskId}`

    return <>
        <NavLink to={url}>
        <div className={s.taskPreview}>
            <div className={s.info}><div className={s.taskTheme}>{props.theme}</div>
                <div className={s.maker}>Создатель: {props.makerFirstname} {props.makerLastname} </div>
                <div className={s.respondents}>
                    <div>Ответственные: </div> <div className={s.respondentsInfo}>
                    {props.respondents.map(e => <div key={e._id}> {e.lastname} {e.firstname} </div>)}</div>
                    </div></div>
            {props.important ? <div className={s.important}><img src={flame} /></div> : <></>}
        </div>
        </NavLink>
    </>
}

export default TaskPreview