import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const';
import { mockStoreWithAuth, mockStoreWithNoAuth } from '../../mocks/store-mocks';
import PrivateRoute from '../private-route/private-route';
import { render, screen } from '@testing-library/react';

describe('Component App', () => {
  const mockStore = configureMockStore();

  it('should render all routes while user is authorized', () => {
    const store = mockStore(mockStoreWithAuth);

    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <Routes>
            <Route path={ AppRoute.Main } element={ <h1>Main page</h1> } />
            <Route path={ AppRoute.Login } element={ <h1>Login page</h1> } />
            <Route path={ AppRoute.Player } element={ <h1>Player page</h1> } />
            <Route path={ AppRoute.NotFound } element={ <h1>Not found page</h1> } />
            <Route path={ AppRoute.Film }>
              <Route path=':id' element={ <h1>Film page</h1> } />
            </Route>
            <Route
              path={ AppRoute.MyList }
              element={
                <PrivateRoute>
                  <h1>My list</h1>
                </PrivateRoute>
              }
            />
            <Route
              path={ `${ AppRoute.Film }/:id/review` }
              element={
                <PrivateRoute>
                  <h1>Add review page</h1>
                </PrivateRoute>
              }
            />
          </Routes>
          <Link to={ AppRoute.Main } data-testid="main-link" />
          <Link to={ AppRoute.Login } data-testid="login-link" />
          <Link to={ AppRoute.Player } data-testid="player-link" />
          <Link to={ AppRoute.NotFound } data-testid="not-found-link" />
          <Link to={ `${ AppRoute.Film }/1` } data-testid="film-link" />
          <Link to={ AppRoute.MyList } data-testid="my-list-link" />
          <Link to={ `${ AppRoute.Film }/:id/review` } data-testid="add-review-link" />
        </BrowserRouter>
      </Provider>);

    render(fakeApp);

    userEvent.click(screen.getByTestId('main-link'));
    expect(screen.getByText('Main page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('login-link'));
    expect(screen.getByText('Login page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('player-link'));
    expect(screen.getByText('Player page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('not-found-link'));
    expect(screen.getByText('Not found page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('film-link'));
    expect(screen.getByText('Film page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('my-list-link'));
    expect(screen.getByText('My list')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('add-review-link'));
    expect(screen.getByText('Add review page')).toBeInTheDocument();
  });

  it('should render all non private routes while user is unauthorized', () => {
    const store = mockStore(mockStoreWithNoAuth);

    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <Routes>
            <Route path={ AppRoute.Main } element={ <h1>Main page</h1> } />
            <Route path={ AppRoute.Login } element={ <h1>Login page</h1> } />
            <Route path={ AppRoute.Player } element={ <h1>Player page</h1> } />
            <Route path={ AppRoute.NotFound } element={ <h1>Not found page</h1> } />
            <Route path={ AppRoute.Film }>
              <Route path=':id' element={ <h1>Film page</h1> } />
            </Route>
          </Routes>
          <Link to={ AppRoute.Main } data-testid="main-link" />
          <Link to={ AppRoute.Login } data-testid="login-link" />
          <Link to={ AppRoute.Player } data-testid="player-link" />
          <Link to={ AppRoute.NotFound } data-testid="not-found-link" />
          <Link to={ `${ AppRoute.Film }/1` } data-testid="film-link" />
        </BrowserRouter>
      </Provider>);

    render(fakeApp);

    userEvent.click(screen.getByTestId('main-link'));
    expect(screen.getByText('Main page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('login-link'));
    expect(screen.getByText('Login page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('player-link'));
    expect(screen.getByText('Player page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('not-found-link'));
    expect(screen.getByText('Not found page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('film-link'));
    expect(screen.getByText('Film page')).toBeInTheDocument();
  });
});
