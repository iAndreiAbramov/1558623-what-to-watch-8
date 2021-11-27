import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FetchStatus, NameSpace } from '../../const';
import FilmPageSimilar from './film-page-similar';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

describe('Component FilmPageSimilar', () => {
  const mockStore = configureMockStore();
  it('should render correctly if fetch status is success', () => {
    const successStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          similarGetStatus: FetchStatus.Success,
        },
      },
    );

    const store = mockStore(successStore);

    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageSimilar />
        </BrowserRouter>
      </Provider>);

    expect(screen.queryByText(/More like this/i)).toBeInTheDocument();
    expect(screen.queryByTestId('error-small')).not.toBeInTheDocument();
  });

  it('should render error message if fetch status is error', () => {
    const errorStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          similarGetStatus: FetchStatus.Error,
        },
      },
    );

    const store = mockStore(errorStore);

    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageSimilar />
        </BrowserRouter>
      </Provider>);

    expect(screen.queryByTestId('error-small')).toBeInTheDocument();
  });
});
