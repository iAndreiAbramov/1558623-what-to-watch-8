import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmPage from '../film-page/film-page';
import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/login' element={ <LoginPage /> } />
      <Route path='/mylist' element={ <MyList /> } />
      <Route path='/films/:id' element={ <FilmPage /> } />
      <Route path='/player/:id' element={ <Player /> } />
      <Route path='/films/:id/review' element={ <AddReviewPage /> } />
      <Route path='*' element={ <NotFoundPage /> } />
    </Routes>
  );
}

export default App;
