import s from './Login.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../redux/thunks/authThunk'
import { useNavigate } from 'react-router-dom'
import { getAuth, getError } from '../../redux/selectors/auth-selectors'

const Login = () => {

    const { register, handleSubmit, reset } = useForm()

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(loginThunk(data))
    }

    const navigate = useNavigate()

    const isAuth = useSelector(getAuth)


    return (<>
        {isAuth ? navigate('../profile')
            : <div className={s.mainWrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    Электронная почта<br />
                    <input type='text' {...register('login')} /><br />
                    Пароль<br />
                    <input type='password' {...register('password')} /><br />
                    <input type='checkbox' {...register('rememberMe')} />Запомнить меня<br />
                    <input type='submit' value='Войти' />
                </form>
            </div >
        }
    </>)
}

export default Login