import React from 'react';
import { useSelector } from 'react-redux';
import FilmsList from '../films-list/films-list';
import { getFavoriteFilms } from '../../store/selectors';
import HiddenComponent from '../hidden-component/hidden-component';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';

function MyListPage(): JSX.Element {
  const favoritesList = useSelector(getFavoriteFilms);
  return (
    <>
      <HiddenComponent />

      <div className="user-page">
        <PageHeader />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsList
            filmsList={ favoritesList }
          />
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default MyListPage;
