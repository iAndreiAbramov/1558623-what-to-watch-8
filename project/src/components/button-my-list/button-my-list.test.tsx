import React from 'react';
import * as Redux from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const';
import ButtonMyList from './button-my-list';
import { createApi } from '../../services/api';
import { mockStoreWithAuth, mockStoreWithNoAuth } from '../../mocks/store-mocks';

const TEST_ID = '1';
const TEST_IS_FAVORITE = false;

describe('Component ButtonMyList', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createApi(onFakeUnauthorized);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  it('should render correctly', () => {
    const store = mockStore(mockStoreWithNoAuth);
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <ButtonMyList id={ TEST_ID } isFavorite={ TEST_IS_FAVORITE } />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should redirect to login page if user is not logged in', () => {
    const store = mockStore(mockStoreWithNoAuth);
    window.history.pushState(null, '', '/fake');
    render(
      <Provider store={ store }>
        <BrowserRouter window={ window }>
          <Routes>
            <Route path="/fake" element={ <ButtonMyList id={ TEST_ID } isFavorite={ TEST_IS_FAVORITE } /> } />
            <Route path={ AppRoute.Login } element={ <h1>Login page</h1> } />
          </Routes>
        </BrowserRouter>
      </Provider>);

    expect(screen.queryByText('Login page')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Login page')).toBeInTheDocument();
  });

  it('should dispatch an action on click if user is logged in', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    const store = mockStore(mockStoreWithAuth);
    window.history.pushState(null, '', `${ AppRoute.Film }/1`);
    render(
      <Provider store={ store }>
        <BrowserRouter window={ window }>
          <Routes>
            <Route
              path={ `${ AppRoute.Film }/1` }
              element={ <ButtonMyList id={ TEST_ID } isFavorite={ TEST_IS_FAVORITE } /> }
            />
          </Routes>
        </BrowserRouter>
      </Provider>);

    expect(dispatch).toBeCalledTimes(0);
    userEvent.click(screen.getByRole('button'));
    expect(dispatch).toBeCalledTimes(1);
  });
});
