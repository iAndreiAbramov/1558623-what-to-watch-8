import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { mockStoreWithAuth, mockStoreWithNoAuth } from '../../mocks/store-mocks';
import PageHeader from './page-header';

describe('Component PageHeader', () => {
  const mockStore = configureMockStore();
  it('should render correctly if user is not logged in', () => {
    const store = mockStore(mockStoreWithNoAuth);
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <PageHeader />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('user-no-auth')).toBeInTheDocument();
    expect(screen.queryByTestId('user-auth')).not.toBeInTheDocument();
  });

  it('should render correctly if user is logged in', () => {
    const store = mockStore(mockStoreWithAuth);
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <PageHeader />
        </BrowserRouter>
      </Provider>);

    expect(screen.queryByTestId('user-no-auth')).not.toBeInTheDocument();
    expect(screen.getByTestId('user-auth')).toBeInTheDocument();
  });
});
