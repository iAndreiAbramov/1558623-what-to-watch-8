import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import FilmPageDetails from './film-page-details';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

describe('Component FilmPageDetails', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  it('should render correctly', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageDetails />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('film-page-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-details-text')).toBeInTheDocument();
  });
});
