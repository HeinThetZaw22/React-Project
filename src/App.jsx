import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './page/auth/Login.page';
import RegisterPage from './page/auth/Register.page';
import { HomePage } from './page';

const App = () => {
  return (
    <div className=' bg-[#f7f7f7]  w-full h-screen'>
        <div className="">
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/home' element={<HomePage />} />
        </Routes>
        </div>
    </div>
  )
}

export default App