import React from 'react';
import { useSelector } from 'react-redux';
import FilmsList from '../films-list/films-list';
import { FetchStatus } from '../../const';
import { getFavoriteFilms, getFavoritesGetStatus } from '../../store/selectors';
import HiddenComponent from '../hidden-component/hidden-component';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';
import SpinnerSmall from '../spinner-small/spinner-small';

function MyListPage(): JSX.Element {
  const favoritesList = useSelector(getFavoriteFilms);
  const favoritesGetStatus = useSelector(getFavoritesGetStatus);

  return (
    <>
      <HiddenComponent />

      <div className="user-page">
        <PageHeader />

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

        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default MyListPage;
