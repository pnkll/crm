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
import { getAuth } from './redux/selectors/auth-selectors';
// import { useCookies } from 'react-cookie'

function App() {

  const { Content } = Layout;

  const dispatch = useDispatch()

  const isAuth = useSelector(getAuth)

  const appInitialized = useSelector(getInitialApp)

  useEffect(() => {
    dispatch(initializedApp())
  }, [])

  // useEffect(() =>{
  //   console.log('hello')
  // },[isAuth])

  {
    !appInitialized &&
    <div>Continue...</div>
  }

  return (<div>
    <BrowserRouter>
      <Layout>
        <Sidebar />
        <Layout>
          <Header />
          <Content style={{ margin: '24px 16px 0' }}>
            <Routes>
              <Route path='signin' element={<Login />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='profile' element={<Person />} />

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
