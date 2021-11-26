import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import LoginPage from './login-page';
import { mockStoreWithNoAuth } from '../../mocks/store-mocks';

describe('Component LoginPage', () => {
  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithNoAuth);
    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>);
    render(fakeApp);

    expect(screen.getByTestId('page-header-login')).toBeInTheDocument();
    expect(screen.getByTestId('login-page-form')).toBeInTheDocument();
    expect(screen.getByTestId('page-footer')).toBeInTheDocument();
  });
});
