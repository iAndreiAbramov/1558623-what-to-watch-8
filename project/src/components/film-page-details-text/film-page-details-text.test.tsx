import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { AuxProps } from '../../store/selectors.test';
import FilmPageDetailsText from './film-page-details-text';
import { getCurrentFilmData } from '../../store/selectors';
import { getFormattedRunTime } from '../../utils/project-utils';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

describe('Component FilmPageDetailsText', () => {
  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithAuth);
    const wrapper = ({ children }: AuxProps) => (<Provider store={ store }>{ children }</Provider>);
    const { result } = renderHook(
      () => useSelector(getCurrentFilmData),
      { wrapper },
    );
    const { director, starring, runTime, genre, released } = result.current;

    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageDetailsText />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(director)).toBeInTheDocument();
    expect(screen.getByText(genre)).toBeInTheDocument();
    expect(screen.getByText(released)).toBeInTheDocument();
    expect(screen.getByText(getFormattedRunTime(runTime))).toBeInTheDocument();
    starring.forEach((star) => {
      expect(screen.getByText(new RegExp(star, 'i'))).toBeInTheDocument();
    });
  });
});
