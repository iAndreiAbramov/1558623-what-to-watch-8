import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import FilmsList from './films-list';
import { filmsFrontMock } from '../../mocks/film-mocks';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

describe('Component FilmsList', () => {
  it('should render films list', () => {
    const names = filmsFrontMock.map((item) => item.name);
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithAuth);
    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <FilmsList filmsList={ filmsFrontMock } />
        </BrowserRouter>
      </Provider>);

    render(fakeApp);

    names.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
