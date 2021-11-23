import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmPage from '../film-page/film-page';
import LoginPage from '../login-page/login-page';
import MainPage from '../main-page/main-page';
import MyListPage from '../my-list-page/my-list-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import VideoPlayerPage from '../video-player-page/video-player-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={ AppRoute.Main } element={ <MainPage /> } />
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
      <Route path={ AppRoute.Player } element={ <VideoPlayerPage /> } />
      <Route
        path={ `${ AppRoute.Film }/:id/review` }
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
