import React from 'react';
import { useSelector } from 'react-redux';
import ErrorMessageSmall from '../error-message-small/error-message-small';
import { FetchStatus } from '../../const';
import FilmsList from '../films-list/films-list';
import { getFavoriteFilms, getFavoritesGetStatus } from '../../store/selectors';
import SpinnerSmall from '../spinner-small/spinner-small';

function MyListContent(): JSX.Element {
  const favoritesList = useSelector(getFavoriteFilms);
  const favoritesGetStatus = useSelector(getFavoritesGetStatus);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {
        favoritesGetStatus === FetchStatus.InProgress
        &&
        <SpinnerSmall />
      }
      {
        favoritesGetStatus === FetchStatus.Success
        &&
        <FilmsList filmsList={ favoritesList } />
      }
      {
        favoritesGetStatus === FetchStatus.Error
        &&
        <ErrorMessageSmall />
      }
    </section>
  );
}

export default MyListContent;
