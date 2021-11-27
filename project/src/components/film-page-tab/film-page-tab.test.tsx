import React from 'react';
import * as Redux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { ActionType } from '../../store/action-creators';
import { commentsMocks } from '../../mocks/comments-mocks';
import { filmFrontMockOne, filmsFrontMock } from '../../mocks/film-mocks';
import FilmPageTab from './film-page-tab';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import { NameSpace, TabName } from '../../const';

const TEST_NAME = 'test-name';

describe('Component FilmPageTab', () => {
  const mockStore = configureMockStore();
  it('should render correctly if tab is not active', () => {
    const store = mockStore(mockStoreWithAuth);
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageTab
            name={ TEST_NAME }
          />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-tab')).toHaveClass('film-nav__item');
    expect(screen.getByTestId('film-page-tab')).not.toHaveClass('film-nav__item film-nav__item--active');
  });

  it('should render correctly if tab is active', () => {
    const activeStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Film]: {
          activeTabName: TEST_NAME,
          currentFilmData: filmFrontMockOne,
          currentFilmReviews: commentsMocks,
          similarFilms: filmsFrontMock,
        },
      },
    );

    const store = mockStore(activeStore);

    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageTab
            name={ TEST_NAME }
          />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-tab')).toHaveClass('film-nav__item film-nav__item--active');
  });

  it('should dispatch a correct action on click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    const store = mockStore(mockStoreWithAuth);

    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageTab
            name={ TEST_NAME }
          />
        </BrowserRouter>
      </Provider>);

    expect(dispatch).not.toBeCalled();
    userEvent.click(screen.getByRole('link'));
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: ActionType.SetActiveTab,
      payload: TEST_NAME,
    });
  });

  it('should dispatch two actions on click if tab name is "Reviews"', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    const store = mockStore(mockStoreWithAuth);

    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPageTab
            name={ TabName.Reviews }
          />
        </BrowserRouter>
      </Provider>);

    expect(dispatch).not.toBeCalled();
    userEvent.click(screen.getByRole('link'));
    expect(dispatch).toBeCalledTimes(2);
  });
});
