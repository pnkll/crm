import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { regThunk } from "../../redux/thunks/authThunk"
import s from './SignUp.module.css'
import { Button } from 'antd'
import { Selector} from './Selector'
import { el } from "date-fns/locale"

const SignUp = () => {

    const dispatch = useDispatch()

    const { register, handleSubmit, reset } = useForm({ mode: 'onBlur' })

    const [message, setMessage] = useState(null)
    const [company, setCompany] = useState()

    const companyies = [
        {
            id: 1,
            name: 'Chebo'
        }, { id: 2, name: 'Элара' }, { id: 3, name: 'Чебомилк' }, { id: 4, name: 'НКТВ' }
    ]

    const onSubmit = (data) => {
        if (data.password != data.reqPassword) {
            setMessage('Пароли не совпадают')
        }
        else {
            console.log(data)
            dispatch(regThunk(data))
            // reset() 
        }
    }

    return <div className={s.mainWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} onClick={() => setMessage(null)}>
            Ваше имя
            <input type='text' {...register('firstName')} />
            Фамилия
            <input type='text' {...register('lastName')} />
            Придумайте пароль
            <input type='password' {...register('password')} />
            Подтвердите пароль
            <input type='password' {...register('reqPassword')} />
            {message != null && <div className={s.error}>{message} </div>}
            Введите адрес электронной почты
            <input className={s.requireEmail} type='email' {...register('email')} />
            <Button>Хочу добавить компанию</Button>
            <Selector array={companyies} key={el.id} value={el.name} text={el.name}/>
            <input className={s.submit} type='submit' value='Зарегистрироваться' />
        </form>
    </div>
}

export default SignUp