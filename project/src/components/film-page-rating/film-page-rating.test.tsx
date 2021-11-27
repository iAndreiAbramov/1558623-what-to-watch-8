import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { AuxProps } from '../../store/selectors.test';
import FilmPageRating from './film-page-rating';
import { getCurrentFilmData } from '../../store/selectors';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import { RATING_DIGITS } from '../../const';

describe('Component FilmPageRating', () => {
  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithAuth);
    const wrapper = ({ children }: AuxProps) => (<Provider store={ store }>{ children }</Provider>);
    const { result } = renderHook(
      () => useSelector(getCurrentFilmData),
      { wrapper },
    );
    const { rating, scoresCount } = result.current;
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageRating />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(rating.toFixed(RATING_DIGITS))).toBeInTheDocument();
    expect(screen.getByText(`${ scoresCount } ratings`)).toBeInTheDocument();
  });
});
