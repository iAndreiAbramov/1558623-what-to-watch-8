import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { AuxProps } from '../../store/selectors.test';
import { getCurrentFilmData } from '../../store/selectors';
import FilmPageOverviewText from './film-page-overview-text';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

describe('Component FilmPageOverviewText', () => {
  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithAuth);
    const wrapper = ({ children }: AuxProps) => (<Provider store={ store }>{ children }</Provider>);
    const { result } = renderHook(
      () => useSelector(getCurrentFilmData),
      { wrapper },
    );
    const { description, director, starring } = result.current;

    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageOverviewText />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(new RegExp(director))).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    starring.forEach((star) => {
      expect(screen.getByText(new RegExp(star, 'i'))).toBeInTheDocument();
    });
  });
});
