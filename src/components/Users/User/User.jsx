import s from './User.module.css'

const User = (props) => {

    const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'

    return <>
        <div className={s.container}>
            <div className={s.avatar}><img src={avatar}/></div>
            <div className={s.info}>
                {props.firstName}<br/>
                {props.lastName}<br/>
                Компания
                Отдел<br/>
                <button>Написать</button>
                <button>Оставить задачу</button>
            </div>
        </div>
    </>
}

export default User