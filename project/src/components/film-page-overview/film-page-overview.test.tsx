import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import FilmPageOverview from './film-page-overview';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

describe('Component FilmPageOverview', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  it('should render correctly', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageOverview />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('film-page-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-rating')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-overview-text')).toBeInTheDocument();
  });
});
