import React from 'react';
import FilmPageOverviewText from '../film-page-overview-text/film-page-overview-text';
import FilmPageRating from '../film-page-rating/film-page-rating';
import FilmPageTabs from '../film-page-tabs/film-page-tabs';

function FilmPageOverview(): JSX.Element {
  return (
    <>
      <FilmPageTabs />
      <FilmPageRating />
      <FilmPageOverviewText />
    </>
  );
}

export default FilmPageOverview;
