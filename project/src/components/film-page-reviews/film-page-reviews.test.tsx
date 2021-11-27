import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import FilmPageReviews from './film-page-reviews';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

describe('Component FilmPageDetails', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  it('should render correctly', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageReviews />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('film-page-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-reviews-list')).toBeInTheDocument();
  });
});
