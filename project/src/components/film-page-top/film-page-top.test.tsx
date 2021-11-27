import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { AuxProps } from '../../store/selectors.test';
import FilmPageTop from './film-page-top';
import { getCurrentFilmData } from '../../store/selectors';
import { mockStoreWithAuth, mockStoreWithNoAuth } from '../../mocks/store-mocks';

describe('Component FilmPageTop', () => {
  const mockStore = configureMockStore();

  it('should render correctly if user is logged in', () => {
    const store = mockStore(mockStoreWithAuth);
    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageTop />
        </BrowserRouter>
      </Provider>);

    const wrapper = ({ children }: AuxProps) => (<Provider store={ store }>{ children }</Provider>);
    const { result } = renderHook(() => useSelector(getCurrentFilmData), { wrapper });
    const { name, genre, released } = result.current;
    render(fakeApp);

    expect(screen.getByTestId('poster-background')).toBeInTheDocument();
    expect(screen.getByTestId('page-header')).toBeInTheDocument();
    expect(screen.getByTestId('button-play')).toBeInTheDocument();
    expect(screen.getByTestId('button-my-list')).toBeInTheDocument();
    expect(screen.getByTestId('button-add-review')).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(genre)).toBeInTheDocument();
    expect(screen.getByText(released)).toBeInTheDocument();
    expect(screen.getByAltText(`${ name } poster`)).toBeInTheDocument();
  });

  it('should not render add review button if user is not logged in', () => {
    const store = mockStore(mockStoreWithNoAuth);
    const fakeApp = (
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageTop />
        </BrowserRouter>
      </Provider>);

    render(fakeApp);

    expect(screen.queryByTestId('button-add-review')).not.toBeInTheDocument();
  });
});
