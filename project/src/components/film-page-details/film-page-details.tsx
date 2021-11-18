import React from 'react';
import FilmPageTabs from '../film-page-tabs/film-page-tabs';
import FilmPageDetailsText from '../film-page-details-text/film-page-details-text';

function FilmPageDetails(): JSX.Element {
  return (
    <>
      <FilmPageTabs />
      <FilmPageDetailsText />
    </>
  );
}

export default FilmPageDetails;
