import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmPage from '../film-page/film-page';
import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import { AppRoute } from '../../const';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={ AppRoute.Main } element={ <HomePage /> } />
      <Route path={ AppRoute.Login } element={ <LoginPage /> } />
      <Route path={ AppRoute.MyList } element={ <MyList /> } />
      <Route path={ AppRoute.Film } element={ <FilmPage /> } />
      <Route path={ AppRoute.Player } element={ <Player /> } />
      <Route path={ AppRoute.AddReview } element={ <AddReviewPage /> } />
      <Route path={ AppRoute.NotFound } element={ <NotFoundPage /> } />
    </Routes>
  );
}

export default App;
