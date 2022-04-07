import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {

  const { Header } = Layout;

  const setActive = ({isActive}) => isActive && s.active 

  const isAuth = true

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
                 {firstName} {lastName}
               </div>
               <img src={avatar}/>
        </div>}
    </Header>
  </>
}


export default Header