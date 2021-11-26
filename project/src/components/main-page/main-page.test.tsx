import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { FetchStatus, NameSpace } from '../../const';
import MainPage from './main-page';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import { render, screen } from '@testing-library/react';

describe('Component MainPage', () => {
  const mockStore = configureMockStore();

  it('should render correctly', () => {
    const fakeStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          promoGetStatus: FetchStatus.Success,
          filmsGetStatus: FetchStatus.Success,
        },
      },
    );

    const store = mockStore(fakeStore);

    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>);

    render(fakeApp);

    expect(screen.getByTestId('main-promo')).toBeInTheDocument();
    expect(screen.getByTestId('page-header')).toBeInTheDocument();
    expect(screen.getByTestId('page-footer')).toBeInTheDocument();
    expect(screen.getByTestId('main-page-content')).toBeInTheDocument();
  });

  it('should render spinner', () => {
    const fakeStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          promoGetStatus: FetchStatus.InProgress,
          filmsGetStatus: FetchStatus.InProgress,
        },
      },
    );

    const store = mockStore(fakeStore);

    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>);

    render(fakeApp);

    expect(screen.getByTestId('spinner-big')).toBeInTheDocument();
    expect(screen.queryByTestId('main-promo')).not.toBeInTheDocument();
    expect(screen.queryByTestId('page-header')).not.toBeInTheDocument();
    expect(screen.queryByTestId('page-footer')).not.toBeInTheDocument();
    expect(screen.queryByTestId('main-page-content')).not.toBeInTheDocument();
  });
});
