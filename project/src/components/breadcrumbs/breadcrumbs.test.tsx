import React from 'react';
import * as Redux from 'react-redux';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { AuxProps } from '../../store/selectors.test';
import Breadcrumbs from './breadcrumbs';
import { getCurrentFilmData } from '../../store/selectors';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import { renderHook } from '@testing-library/react-hooks';
import { AppRoute } from '../../const';
import FilmPage from '../film-page/film-page';
import { createApi } from '../../services/api';

describe('Component BreadCrumbs', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createApi(onFakeUnauthorized);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(mockStoreWithAuth);
  const fakeApp = (
    <Provider store={ store }>
      <BrowserRouter>
        <Breadcrumbs />
      </BrowserRouter>
    </Provider>);

  it('should render correctly', () => {
    const wrapper = ({ children }: AuxProps) => (<Provider store={ store }>{ children }</Provider>);
    const { result } = renderHook(() => useSelector(getCurrentFilmData), { wrapper });
    const name = result.current.name;
    render(fakeApp);

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it('should dispatch action on click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(fakeApp);

    userEvent.click(screen.getByRole('link'));
    expect(dispatch).toBeCalledTimes(1);
  });

  it('should redirect to film page and dispatch one action on click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    window.history.pushState(null, '', '/fake');
    render(
      <Provider store={ store }>
        <BrowserRouter window={ window }>
          <Routes>
            <Route path="/fake" element={ <Breadcrumbs /> } />
            <Route path={ AppRoute.Film }>
              <Route path=':id' element={ <h1>Film page</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>);

    expect(screen.queryByText('Film page')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText('Film page')).toBeInTheDocument();
    expect(dispatch).toBeCalledTimes(1);
  });
});
