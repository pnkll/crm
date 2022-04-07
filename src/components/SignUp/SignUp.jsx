import React from "react"
import { useForm } from "react-hook-form"
import s from './SignUp.module.css'

const SignUp = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return <div className={s.mainWrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register('firstName')} /><br />
            <input type='text' {...register('lastName')} /><br />
            <input type='password' {...register('password')} /><br />
            <input type='password' {...register('reqPassword')} /><br />
            <input type='email' {...register('email')} /><br />
            <input type='submit' value='Зарегистрироваться'/>
        </form>

    </div>
}

export default SignUp