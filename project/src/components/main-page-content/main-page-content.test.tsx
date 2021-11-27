import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import MainPageContent from './main-page-content';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

describe('Component MainPageContent', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  const fakeApp = (
    <Provider store={ store }>
      <BrowserRouter>
        <MainPageContent />
      </BrowserRouter>
    </Provider>);

  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByTestId('main-page-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('films-list')).toBeInTheDocument();
  });
});
