import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { regThunk } from "../../redux/thunks/authThunk"
import s from './SignUp.module.css'

const SignUp = () => {

const dispatch = useDispatch()

    const { register, handleSubmit, reset } = useForm({mode: 'onBlur'})

    const [ message, setMessage ] = useState(null)

    const onSubmit = (data) => {
        if (data.password != data.reqPassword){
            setMessage('Пароли не совпадают')
        }
        else { 
            console.log(data)
            dispatch(regThunk(data))
            // reset() 
        }
    }

    return <div className={s.mainWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} onClick={()=> setMessage(null)}>
            Ваше имя<br/>
            <input type='text' {...register('firstName')} /><br />
            Фамилия<br/>
            <input type='text' {...register('lastName')} /><br />
            Придумайте пароль<br/>
            <input type='password' {...register('password')} /><br />
            Подтвердите пароль<br/>
            <input type='password' {...register('reqPassword')} /><br />
            {message !=null && <div className={s.error}>{message} <br/></div>}
            Введите адрес электронной почты<br/>
            <input type='email' {...register('email')} /><br />
            <br/><input type='submit' value='Зарегистрироваться'/>
        </form>
    </div>
}

export default SignUp