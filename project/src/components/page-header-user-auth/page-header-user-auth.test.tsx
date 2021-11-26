import React from 'react';
import * as Redux from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const';
import { createApi } from '../../services/api';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import PageHeaderUserAuth from './page-header-user-auth';

describe('Component PageHeaderUserAuth', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createApi(onFakeUnauthorized);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);
  it('should render correctly', () => {
    const store = mockStore(mockStoreWithAuth);
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <PageHeaderUserAuth avatarUrl={ 'test-url' } />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('should redirect to my list page on click and dispatch an actions', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    const store = mockStore(mockStoreWithAuth);
    window.history.pushState(null, '', '/fake');
    render(
      <Provider store={ store }>
        <BrowserRouter window={ window }>
          <Routes>
            <Route path="/fake" element={ <PageHeaderUserAuth avatarUrl={ 'test-url' } /> } />
            <Route path={ AppRoute.MyList } element={ <h1>My list</h1> } />
          </Routes>
        </BrowserRouter>
      </Provider>);

    const [myListLink, logOutLink] = screen.getAllByRole('link');

    expect(screen.queryByText('My list')).not.toBeInTheDocument();
    userEvent.click(logOutLink);
    expect(dispatch).toBeCalledTimes(1);
    expect(screen.queryByText('My list')).not.toBeInTheDocument();
    userEvent.click(myListLink);
    expect(dispatch).toBeCalledTimes(2);
    expect(screen.getByText('My list')).toBeInTheDocument();
  });
});
