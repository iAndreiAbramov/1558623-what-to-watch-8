import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPageTabs from './main-page-tabs';
import { tabNames } from '../../const';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import { BrowserRouter } from 'react-router-dom';

describe('Component MainPageTabs', () => {
  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithAuth);
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <MainPageTabs tabsList={ tabNames } />
        </BrowserRouter>
      </Provider>);

    tabNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
