import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import FilmPageTabs from './film-page-tabs';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import { tabNames } from '../../const';

describe('Component FilmPageTabs', () => {
  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithAuth);
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageTabs />
        </BrowserRouter>
      </Provider>);

    tabNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
