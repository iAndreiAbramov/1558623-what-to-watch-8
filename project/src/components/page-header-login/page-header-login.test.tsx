import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { mockStoreWithNoAuth } from '../../mocks/store-mocks';
import PageHeaderLogin from './page-header-login';

describe('Component PageHeaderLogin', () => {
  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithNoAuth);
    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <PageHeaderLogin />
        </BrowserRouter>
      </Provider>);
    render(fakeApp);

    expect(screen.getByTestId('page-header-login')).toBeInTheDocument();
  });
});
