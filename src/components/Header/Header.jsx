import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {

  const { Header } = Layout;

  const setActive = ({isActive}) => isActive && s.active 

  return <>
    <Header className={s.siteLayoutSubHeaderBackground}>
      <div className={s.buttons}>
      <NavLink to='signin' className={setActive}><div className={s.signIn}>Войти</div></NavLink>
      <NavLink to='signup' className={setActive}><div className={s.signUp}>Зарегиcтрироваться</div></NavLink>
      </div>
    </Header>
  </>
}


export default Header