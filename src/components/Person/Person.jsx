import { useSelector } from 'react-redux'
import { getFirstname, getLastname } from '../../redux/selectors/auth-selectors'
import s from './Person.module.css'

export default function Person() {

    const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'

    const firstName = useSelector(getFirstname)
    const lastName = useSelector(getLastname)
    

    return (
        <div className={s.mainWrapper}>
            <div className={s.profile}>
                <img src={avatar}/>
                <div className={s.info}>
                <span>Имя: {firstName}</span>
                <span>Фамилия: {lastName}</span>
                <span>Компания: </span>
                <span>Отдел: </span>
                <span>Должность: </span>
                <span>Руководитель: </span>
                </div>
            </div>
        </div>
    )
}