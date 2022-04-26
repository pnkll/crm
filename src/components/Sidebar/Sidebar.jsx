import { Layout, Menu } from "antd";
import { PlayCircleOutlined, UserOutlined, InboxOutlined,TeamOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import { Button } from 'antd'
import s from './Sidebar.module.css'
import { useSelector } from "react-redux";
import { getRoles } from "../../redux/selectors/auth-selectors";


const Sidebar = (props) => {

  const { Sider } = Layout
  const roles = useSelector(getRoles)


  return <>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      theme='dark'
      onBreakpoint={broken => {
        // console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <div className={s.taskButton}>
        <NavLink to='new'><Button type="primary">Новая задача</Button></NavLink>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <NavLink to='profile'>Личный кабинет</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<InboxOutlined />}>
        <NavLink to='inbox'>Входящие</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<PlayCircleOutlined />}>
        <NavLink to='tasks'>Текущие</NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>
        <NavLink to='users'>Сотрудники</NavLink>
        </Menu.Item>  
      </Menu>
    </Sider>
  </>
}


export default Sidebar