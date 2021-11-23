import React from 'react';
import FilmPageDetailsText from '../film-page-details-text/film-page-details-text';
import FilmPageTabs from '../film-page-tabs/film-page-tabs';

function FilmPageDetails(): JSX.Element {
  return (
    <>
      <FilmPageTabs />
      <FilmPageDetailsText />
    </>
  );
}

export default FilmPageDetails;
