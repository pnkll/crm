import './App.css'

import { Layout } from 'antd';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import Transit from './Transit';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import Person from './components/Person/Person';


function App() {

  const { Content } = Layout;

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
              <Route path='profile' element={<Person/>} />
              <Route path='test' element={<Transit/>} />
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
