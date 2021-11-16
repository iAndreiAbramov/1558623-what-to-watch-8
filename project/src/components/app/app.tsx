import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmPage from '../film-page/film-page';
import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';
import MyListPage from '../my-list-page/my-list-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PlayerPage from '../player-page/playerPage';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={ AppRoute.Main } element={ <HomePage /> } />
      <Route path={ AppRoute.Login } element={ <LoginPage /> } />
      <Route
        path={ AppRoute.MyList }
        element={
          <PrivateRoute>
            <MyListPage />
          </PrivateRoute>
        }
      />
      <Route path={ AppRoute.Film }>
        <Route path=':id' element={ <FilmPage /> } />
      </Route>
      <Route path={ AppRoute.Player } element={ <PlayerPage /> } />
      <Route
        path={ AppRoute.AddReview }
        element={
          <PrivateRoute>
            <AddReviewPage />
          </PrivateRoute>
        }
      />
      <Route path={ AppRoute.NotFound } element={ <NotFoundPage /> } />
    </Routes>
  );
}

export default App;
