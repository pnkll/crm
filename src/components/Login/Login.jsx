import s from './Login.module.css'
import { useForm } from 'react-hook-form'

const Login = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return <div className={s.mainWrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
            Электронная почта<br/>
            <input type='text' {...register('login')} /><br />
            Пароль<br/>
            <input type='password' {...register('password')} /><br />
            <input type='checkbox' {...register('rememberMe')}/>Запомнить меня<br/>
            <input type='submit' value='Войти' />
        </form>
    </div>
}

export default Login