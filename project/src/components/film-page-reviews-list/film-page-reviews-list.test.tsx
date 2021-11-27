import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { FetchStatus, NameSpace } from '../../const';
import FilmPageReviewsList from './film-page-reviews-list';
import { mockStoreWithAuth } from '../../mocks/store-mocks';

describe('Component FilmPageReviewsList', () => {
  const mockStore = configureMockStore();
  it('should render correctly if fetch status is success', () => {
    const successStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          commentsGetStatus: FetchStatus.Success,
        },
      },
    );

    const store = mockStore(successStore);

    render(
      <Provider store={ store }>
        <FilmPageReviewsList />
      </Provider>);

    expect(screen.queryByTestId('reviews-left')).toBeInTheDocument();
    expect(screen.queryByTestId('reviews-right')).toBeInTheDocument();
    expect(screen.queryByTestId('spinner-small')).not.toBeInTheDocument();
    expect(screen.queryByTestId('error-small')).not.toBeInTheDocument();
  });

  it('should render spinner if fetch status is in progress', () => {
    const progressStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          commentsGetStatus: FetchStatus.InProgress,
        },
      },
    );

    const store = mockStore(progressStore);

    render(
      <Provider store={ store }>
        <FilmPageReviewsList />
      </Provider>);

    expect(screen.queryByTestId('reviews-left')).not.toBeInTheDocument();
    expect(screen.queryByTestId('reviews-right')).not.toBeInTheDocument();
    expect(screen.queryByTestId('spinner-small')).toBeInTheDocument();
    expect(screen.queryByTestId('error-small')).not.toBeInTheDocument();
  });

  it('should render error message if fetch status is error', () => {
    const errorStore = Object.assign(
      {},
      mockStoreWithAuth,
      {
        [NameSpace.Status]: {
          commentsGetStatus: FetchStatus.Error,
        },
      },
    );

    const store = mockStore(errorStore);

    render(
      <Provider store={ store }>
        <FilmPageReviewsList />
      </Provider>);

    expect(screen.queryByTestId('reviews-left')).not.toBeInTheDocument();
    expect(screen.queryByTestId('reviews-right')).not.toBeInTheDocument();
    expect(screen.queryByTestId('spinner-small')).not.toBeInTheDocument();
    expect(screen.queryByTestId('error-small')).toBeInTheDocument();
  });
});
