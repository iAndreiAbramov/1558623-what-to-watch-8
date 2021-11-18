import React from 'react';
import FilmPageReviewsList from '../film-page-reviews-list/film-page-reviews-list';
import FilmPageTabs from '../film-page-tabs/film-page-tabs';

function FilmPageReviews(): JSX.Element {
  return (
    <>
      <FilmPageTabs />
      <FilmPageReviewsList />
    </>
  );
}

export default FilmPageReviews;
