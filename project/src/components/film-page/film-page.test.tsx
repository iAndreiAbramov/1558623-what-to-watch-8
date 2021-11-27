import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { commentsMocks } from '../../mocks/comments-mocks';
import { FetchStatus, NameSpace, TabName } from '../../const';
import FilmPage from './film-page';
import { filmFrontMockOne, filmsFrontMock } from '../../mocks/film-mocks';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

describe('Component FilmPage', () => {
  const mockStore = configureMockStore();
  it('should render spinner if loading is in progress', () => {
    const progressStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          filmGetStatus: FetchStatus.InProgress,
        },
      },
    );
    const store = mockStore(progressStore);

    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPage />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('spinner-big')).toBeInTheDocument();
    expect(screen.queryByTestId('film-page-top')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-poster')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-similar')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-tabs')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-rating')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-overview-text')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-details-text')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-reviews-list')).not.toBeInTheDocument();
    expect(screen.queryByTestId('page-footer')).not.toBeInTheDocument();
  });

  it('should render overview tab if fetch status is success', () => {
    const successStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          filmGetStatus: FetchStatus.Success,
        },
      },
    );
    const store = mockStore(successStore);
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPage />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('film-page-top')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-poster')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-similar')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-overview-text')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-rating')).toBeInTheDocument();
    expect(screen.queryByTestId('film-page-details-text')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-reviews-list')).not.toBeInTheDocument();
    expect(screen.getByTestId('page-footer')).toBeInTheDocument();
  });

  it('should render details tab if fetch status is success', () => {
    const detailsStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          filmGetStatus: FetchStatus.Success,
        },
      },
      {
        [NameSpace.Film]: {
          activeTabName: TabName.Details,
          currentFilmData: filmFrontMockOne,
          currentFilmReviews: commentsMocks,
          similarFilms: filmsFrontMock,
        },
      },
    );
    const store = mockStore(detailsStore);
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPage />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('film-page-top')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-poster')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-similar')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-tabs')).toBeInTheDocument();
    expect(screen.queryByTestId('film-page-overview-text')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-rating')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-details-text')).toBeInTheDocument();
    expect(screen.queryByTestId('film-page-reviews-list')).not.toBeInTheDocument();
    expect(screen.getByTestId('page-footer')).toBeInTheDocument();
  });

  it('should render reviews tab if fetch status is success', () => {
    const reviewsStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          filmGetStatus: FetchStatus.Success,
        },
      },
      {
        [NameSpace.Film]: {
          activeTabName: TabName.Reviews,
          currentFilmData: filmFrontMockOne,
          currentFilmReviews: commentsMocks,
          similarFilms: filmsFrontMock,
        },
      },
    );
    const store = mockStore(reviewsStore);
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <FilmPage />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('film-page-top')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-poster')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-similar')).toBeInTheDocument();
    expect(screen.getByTestId('film-page-tabs')).toBeInTheDocument();
    expect(screen.queryByTestId('film-page-overview-text')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-rating')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-details-text')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-page-reviews-list')).toBeInTheDocument();
    expect(screen.getByTestId('page-footer')).toBeInTheDocument();
  });
});
