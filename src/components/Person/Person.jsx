import s from './Person.module.css'

export default function Person() {

    const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'

    return (
        <div className={s.mainWrapper}>
            <div className={s.profile}>
                <img src={avatar}/>
                <div className={s.info}>
                <span>Имя: </span>
                <span>Фамилия: </span>
                <span>Компания: </span>
                <span>Отдел: </span>
                
                </div>
            </div>
        </div>
    )
}