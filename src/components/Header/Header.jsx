import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, getLogin } from '../../redux/selectors/auth-selectors';
import { Button } from 'antd';
import { setAuth, logout } from '../../redux/reducers/auth-reducer';

const Header = (props) => {

  const { Header } = Layout;

  const dispatch = useDispatch()

  const setActive = ({isActive}) => isActive && s.active 

  const isAuth = useSelector(getAuth)
  const login = useSelector(getLogin)

  const onLogout = () => {
    localStorage.setItem('jwt', null)
    dispatch(logout())
  }

  const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'
  const firstName = 'Евгений'
  const lastName = 'Романов'

  return <>
    <Header className={s.siteLayoutSubHeaderBackground}>
      {!isAuth ? <div className={s.buttons}>
      <NavLink to='signin' className={setActive}><div className={s.signIn}>Войти</div></NavLink>
      <NavLink to='signup' className={setActive}><div className={s.signUp}>Зарегиcтрироваться</div></NavLink>
      </div>
      : <div className={s.user}>
               <div className={s.info}>
                 {login}
               </div>
               <img src={avatar}/>
               <Button onClick={onLogout}>Выйти</Button>
        </div>}
    </Header>
  </>
}


export default Header