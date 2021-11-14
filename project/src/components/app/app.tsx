import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/login' element={ <LoginPage /> } />
    </Routes>
  );
}

export default App;
