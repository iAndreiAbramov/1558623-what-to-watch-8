import React, { ReactChild, ReactChildren } from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider, useSelector } from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';
import { ALL_GENRES_TAB_NAME, AuthorizationStatus, FetchStatus, TabName } from '../const';
import { commentsMocks } from '../mocks/comments-mocks';
import { filmFrontMockOne, filmsFrontMock } from '../mocks/film-mocks';
import {
  getActiveFilterName,
  getActiveTabName,
  getAuthStatus,
  getCommentPostStatus,
  getCommentsGetStatus,
  getCurrentFilmData,
  getCurrentFilmReviews,
  getCurrentUser,
  getFavoriteFilms,
  getFavoritesGetStatus,
  getFilmGetStatus,
  getFilmsData,
  getFilmsGetStatus,
  getPlayerData,
  getPromoData,
  getPromoGetStatus,
  getSimilarFilms,
  getSimilarGetStatus
} from './selectors';
import { mockPromoData, mockStoreWithAuth } from '../mocks/store-mocks';
import { userFrontMock } from '../mocks/user-mocks';

export interface AuxProps {
  children: ReactChild | ReactChildren;
}

describe('Selector', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  const wrapper = ({ children }: AuxProps) => (<Provider store={ store }>{ children }</Provider>);

  it('getAuthStatus should return correct state', () => {
    const { result } = renderHook(() => useSelector(getAuthStatus), { wrapper });
    expect(result.current).toBe(AuthorizationStatus.Auth);
  });

  it('getCurrentUser should return correct state', () => {
    const { result } = renderHook(() => useSelector(getCurrentUser), { wrapper });
    expect(result.current).toEqual(userFrontMock);
  });

  it('getFilmsData should return correct state', () => {
    const { result } = renderHook(() => useSelector(getFilmsData), { wrapper });
    expect(result.current).toEqual(filmsFrontMock);
  });

  it('getActiveFilterName should return correct state', () => {
    const { result } = renderHook(() => useSelector(getActiveFilterName), { wrapper });
    expect(result.current).toBe(ALL_GENRES_TAB_NAME);
  });

  it('getPromoData should return correct state', () => {
    const { result } = renderHook(() => useSelector(getPromoData), { wrapper });
    expect(result.current).toEqual(mockPromoData);
  });

  it('getActiveTabName should return correct state', () => {
    const { result } = renderHook(() => useSelector(getActiveTabName), { wrapper });
    expect(result.current).toBe(TabName.Overview);
  });

  it('getCurrentFilmData should return correct state', () => {
    const { result } = renderHook(() => useSelector(getCurrentFilmData), { wrapper });
    expect(result.current).toEqual(filmFrontMockOne);
  });

  it('getCurrentFilmReviews should return correct state', () => {
    const { result } = renderHook(() => useSelector(getCurrentFilmReviews), { wrapper });
    expect(result.current).toEqual(commentsMocks);
  });

  it('getSimilarFilms should return correct state', () => {
    const { result } = renderHook(() => useSelector(getSimilarFilms), { wrapper });
    expect(result.current).toEqual(filmsFrontMock);
  });

  it('getFavoriteFilms should return correct state', () => {
    const { result } = renderHook(() => useSelector(getFavoriteFilms), { wrapper });
    expect(result.current).toEqual(filmsFrontMock);
  });

  it('getCommentPostStatus should return correct state', () => {
    const { result } = renderHook(() => useSelector(getCommentPostStatus), { wrapper });
    expect(result.current).toEqual(FetchStatus.Undefined);
  });

  it('getPromoGetStatus should return correct state', () => {
    const { result } = renderHook(() => useSelector(getPromoGetStatus), { wrapper });
    expect(result.current).toEqual(FetchStatus.Undefined);
  });

  it('getFilmsGetStatus should return correct state', () => {
    const { result } = renderHook(() => useSelector(getFilmsGetStatus), { wrapper });
    expect(result.current).toEqual(FetchStatus.Undefined);
  });

  it('getFilmGetStatus should return correct state', () => {
    const { result } = renderHook(() => useSelector(getFilmGetStatus), { wrapper });
    expect(result.current).toEqual(FetchStatus.Undefined);
  });

  it('getSimilarGetStatus should return correct state', () => {
    const { result } = renderHook(() => useSelector(getSimilarGetStatus), { wrapper });
    expect(result.current).toEqual(FetchStatus.Undefined);
  });

  it('getCommentsGetStatus should return correct state', () => {
    const { result } = renderHook(() => useSelector(getCommentsGetStatus), { wrapper });
    expect(result.current).toEqual(FetchStatus.Undefined);
  });

  it('getFavoritesGetStatus should return correct state', () => {
    const { result } = renderHook(() => useSelector(getFavoritesGetStatus), { wrapper });
    expect(result.current).toEqual(FetchStatus.Undefined);
  });

  it('getPlayerData should return correct state', () => {
    const { result } = renderHook(() => useSelector(getPlayerData), { wrapper });
    expect(result.current).toEqual(FetchStatus.Undefined);
  });
});
