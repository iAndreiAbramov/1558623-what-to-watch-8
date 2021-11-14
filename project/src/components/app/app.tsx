import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmPage from '../film-page/film-page';
import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';
import MyListPage from '../my-list/my-list-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PlayerPage from '../player/playerPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={ AppRoute.Main } element={ <HomePage /> } />
      <Route path={ AppRoute.Login } element={ <LoginPage /> } />
      <Route path={ AppRoute.MyList } element={ <MyListPage /> } />
      <Route path={ AppRoute.Film } element={ <FilmPage /> } />
      <Route path={ AppRoute.Player } element={ <PlayerPage /> } />
      <Route path={ AppRoute.AddReview } element={ <AddReviewPage /> } />
      <Route path={ AppRoute.NotFound } element={ <NotFoundPage /> } />
    </Routes>
  );
}

export default App;
