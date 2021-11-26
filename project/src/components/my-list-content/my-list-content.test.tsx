import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { FetchStatus, NameSpace } from '../../const';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import MyListContent from './my-list-content';

describe('Component MyListContent', () => {
  const mockStore = configureMockStore();
  it('should render spinner', () => {
    const fakeStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          favoritesGetStatus: FetchStatus.InProgress,
        },
      },
    );
    const store = mockStore(fakeStore);
    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <MyListContent />
        </BrowserRouter>
      </Provider>);
    render(fakeApp);

    expect(screen.getByTestId('spinner-small')).toBeInTheDocument();
  });

  it('should render error message', () => {
    const fakeStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          favoritesGetStatus: FetchStatus.Error,
        },
      },
    );
    const store = mockStore(fakeStore);
    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <MyListContent />
        </BrowserRouter>
      </Provider>);

    render(fakeApp);

    expect(screen.getByTestId('error-small')).toBeInTheDocument();
  });
});
