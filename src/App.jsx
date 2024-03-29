import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './page/auth/Login.page';
import RegisterPage from './page/auth/Register.page';

const App = () => {
  return (
    <div className=' bg-slate-900  w-full h-screen'>
        <div className="container">
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
        </Routes>
        </div>
    </div>
  )
}

export default App