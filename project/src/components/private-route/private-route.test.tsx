import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const';
import { mockStoreWithNoAuth } from '../../mocks/store-mocks';
import PrivateRoute from './private-route';

describe('Component PrivateRoute', () => {
  it('should redirect from private routes to login page while user is unauthorized', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithNoAuth);
    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <Routes>
            <Route path={ AppRoute.Main } element={ <h1>Main page</h1> } />
            <Route path={ AppRoute.Login } element={ <h1>Login page</h1> } />
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
          <Link to={ AppRoute.MyList } data-testid="my-list-link" />
          <Link to={ `${ AppRoute.Film }/:id/review` } data-testid="add-review-link" />
        </BrowserRouter>
      </Provider>);

    render(fakeApp);

    userEvent.click(screen.getByTestId('my-list-link'));
    expect(screen.queryByText('My list')).not.toBeInTheDocument();
    expect(screen.getByText('Login page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('add-review-link'));
    expect(screen.queryByText('Add review page')).not.toBeInTheDocument();
    expect(screen.getByText('Login page')).toBeInTheDocument();
  });
});
