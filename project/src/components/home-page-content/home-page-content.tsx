import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FILMS_INCREMENT_STEP, INITIAL_FILMS_COUNT } from '../../const';
import { getFilmsData } from '../../store/selectors';
import HomePageList from '../home-page-list/home-page-list';
import HomePageMore from '../home-page-more/home-page-more';
import HomePageTabs from '../home-page-tabs/home-page-tabs';
import PageFooter from '../page-footer/page-footer';

function HomePageContent(): JSX.Element {
  const filmsData = useSelector(getFilmsData);
  const [filmsCount, setFilmsCount] = useState(INITIAL_FILMS_COUNT);
  const [filmsList, setFilmsList] = useState(filmsData.slice(0, INITIAL_FILMS_COUNT));

  const handleMoreButtonClick = () => {
    let counterStep = FILMS_INCREMENT_STEP;
    if (counterStep > filmsData.length - filmsCount) {
      counterStep = filmsData.length - filmsCount;
    }
    setFilmsCount((prev) => prev + counterStep);
  };

  useEffect(() => {
    if (filmsList.length === 0) {
      setFilmsList(filmsData.slice(0, INITIAL_FILMS_COUNT));
    }
  });

  useEffect(() => {
    setFilmsList(filmsData.slice(0, filmsCount));
  }, [filmsCount]);

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <HomePageTabs />
        <HomePageList
          filmsList={ filmsList }
        />
        <HomePageMore
          clickHandler={ handleMoreButtonClick }
        />
      </section>
      <PageFooter />
    </div>
  );
}

export default HomePageContent;
