import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import MyListPage from './my-list-page';

describe('Component MyListPage', () => {
  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithAuth);
    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <MyListPage />
        </BrowserRouter>
      </Provider>);

    render(fakeApp);

    expect(screen.getByTestId('page-header')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByTestId('page-footer')).toBeInTheDocument();
  });
});
