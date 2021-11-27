import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { AuxProps } from '../../store/selectors.test';
import FilmPagePoster from './film-page-poster';
import { getCurrentFilmData } from '../../store/selectors';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

describe('Component FilmPagePoster', () => {
  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithAuth);
    const wrapper = ({ children }: AuxProps) => (<Provider store={ store }>{ children }</Provider>);
    const { result } = renderHook(
      () => useSelector(getCurrentFilmData),
      { wrapper },
    );
    const { name } = result.current;
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPagePoster />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByAltText(`${ name } poster`)).toBeInTheDocument();
  });
});
