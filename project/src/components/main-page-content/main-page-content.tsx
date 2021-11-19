import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FilmDataTypesFront } from '../../types/film-data-types';
import { FILMS_INCREMENT_STEP, INITIAL_FILMS_COUNT } from '../../const';
import { filterFilmsByGenre, getGenres } from '../../utils/project-utils';
import { getActiveFilterName, getFilmsData } from '../../store/selectors';
import FilmsList from '../films-list/films-list';
import MainPageMore from '../main-page-more/main-page-more';
import MainPageTabs from '../main-page-tabs/main-page-tabs';
import PageFooter from '../page-footer/page-footer';

function MainPageContent(): JSX.Element {
  const filmsData = useSelector(getFilmsData);
  const activeTabName = useSelector(getActiveFilterName);
  const tabsList = getGenres(filmsData);
  const [filteredList, setFilteredList] = useState<FilmDataTypesFront[]>(filterFilmsByGenre(filmsData, activeTabName));
  const [renderList, setRenderList] = useState<FilmDataTypesFront[]>(filteredList.slice(0, INITIAL_FILMS_COUNT));
  const [renderCount, setRenderCount] = useState<number>(INITIAL_FILMS_COUNT);

  useEffect(() => {
    setFilteredList(filterFilmsByGenre(filmsData, activeTabName));
    setRenderCount(INITIAL_FILMS_COUNT);
  }, [activeTabName]);

  useEffect(() => {
    setRenderList(filteredList.slice(0, renderCount));
  }, [renderCount, filteredList]);

  useEffect(() => {
    if (filteredList.length === 0) {
      setFilteredList(filterFilmsByGenre(filmsData, activeTabName));
    }
  });

  const handleMoreButtonClick = () => {
    let counterStep = FILMS_INCREMENT_STEP;
    if (counterStep > filteredList.length - renderCount) {
      counterStep = filteredList.length - renderCount;
    }
    setRenderCount((prev) => prev + counterStep);
  };

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MainPageTabs tabsList={ tabsList } />
        <FilmsList filmsList={ renderList } />
        {
          renderList.length < filteredList.length
          &&
          <MainPageMore
            clickHandler={ handleMoreButtonClick }
          />
        }
      </section>
      <PageFooter />
    </div>
  );
}

export default MainPageContent;
