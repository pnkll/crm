import s from './Login.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../redux/thunks/authThunk'
import { useNavigate } from 'react-router-dom'
import { getAuth, getError } from '../../redux/selectors/auth-selectors'
import { setError } from '../../redux/reducers/auth-reducer'
import { useCookies } from 'react-cookie'

const Login = () => {

    const { register, handleSubmit, reset } = useForm()

    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies(['token'])

    const onSubmit = (data) => {
        dispatch(loginThunk(data))
    }

    const setError = () => {
        console.log('hel')
        dispatch(setError(null))
    }

    const navigate = useNavigate()

    const isAuth = useSelector(getAuth)
    const error = useSelector(getError)


    return (<>
        {isAuth ? navigate('../profile')
            : <div className={s.mainWrapper}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    Электронная почта<br />
                    <input type='email' {...register('email')} /><br />
                    Пароль<br />
                    <input type='password' {...register('password')} /><br />
                    <input type='checkbox' {...register('rememberMe')} />Запомнить меня<br />
                    {error!= null ? <div className={s.error}>{error}</div> : <></>}
                    <input type='submit' value='Войти' />
                </form>
            </div >
        }
    </>)
}

export default Login