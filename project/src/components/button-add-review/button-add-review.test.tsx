import React from 'react';
import * as Redux from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const';
import ButtonAddReview from './button-add-review';
import { createApi } from '../../services/api';
import { mockStoreWithAuth, mockStoreWithNoAuth } from '../../mocks/store-mocks';
import { render, screen } from '@testing-library/react';

const TEST_ID = '1';

describe('Component ButtonAddReview', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createApi(onFakeUnauthorized);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  it('should render correctly', () => {
    const store = mockStore(mockStoreWithNoAuth);
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <ButtonAddReview id={ TEST_ID } />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText('Add review')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should dispatch an action on click if user is logged in and go to review page', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    const store = mockStore(mockStoreWithAuth);
    window.history.pushState(null, '', `${ AppRoute.Film }/${ TEST_ID }`);
    render(
      <Provider store={ store }>
        <BrowserRouter window={ window }>
          <Routes>
            <Route
              path={ `${ AppRoute.Film }/${ TEST_ID }` }
              element={ <ButtonAddReview id={ TEST_ID } /> }
            />
            <Route path={ `${ AppRoute.Film }/${ TEST_ID }/review` } element={ <h1>Review page</h1> } />
          </Routes>
        </BrowserRouter>
      </Provider>);

    expect(dispatch).toBeCalledTimes(0);
    expect(screen.queryByText('Review page')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(dispatch).toBeCalledTimes(1);
    expect(screen.getByText('Review page')).toBeInTheDocument();
  });
});
