import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';
import MyList from '../my-list/my-list';
import FilmPage from '../film-page/film-page';
import Player from '../player/player';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/login' element={ <LoginPage /> } />
      <Route path='/mylist' element={ <MyList /> } />
      <Route path='/films/:id' element={ <FilmPage /> } />
      <Route path='/player/:id' element={ <Player /> } />
    </Routes>
  );
}

export default App;
