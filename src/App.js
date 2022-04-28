import './App.css'

import { Layout } from 'antd';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import Person from './components/Person/Person';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialApp } from './redux/selectors/app-selectors';
import { initializedApp } from './redux/thunks/appThunk';
import { getAuth, getUserId } from './redux/selectors/auth-selectors';
import Users from './components/Users/Users';
import TaskForm from './components/Tasks/TaskForm/TaskForm';
import Tasks from './components/Tasks/Tasks';
import Task from './components/Tasks/Task/Task';
import { getTasks } from './redux/thunks/tasksThunk';
// import { useCookies } from 'react-cookie'

function App() {

  const { Content } = Layout;

  const dispatch = useDispatch()

  const isAuth = useSelector(getAuth)
  const userId = useSelector(getUserId)

  const appInitialized = useSelector(getInitialApp)

  useEffect(() => {
    dispatch(initializedApp())
  }, [])

  {
    !appInitialized &&
      <div>Continue...</div>
  }

  return (<div>
    <BrowserRouter>
      <Layout>
        {isAuth ? <Sidebar /> : <></>}
        <Layout>
          <Header />
          <Content style={{ margin: '24px 16px 0' }}>
            <Routes>
              <Route path='signin' element={<Login />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='profile' element={<Person />} />
              <Route path='users' element={<Users />} />
              <Route path='new' element={<TaskForm/>} />
              <Route path='inbox' element={<Tasks/>} />
              <Route path='task/:id' element={<Task/>} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </BrowserRouter>
  </div>
  );
}


export default App;
