import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveTabName } from '../../store/selectors';
import FilmPageAlike from '../film-page-alike/film-page-alike';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPagePoster from '../film-page-poster/film-page-poster';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';
import FilmPageTop from '../film-page-top/film-page-top';
import HiddenComponent from '../hidden-component/hidden-component';
import PageFooter from '../page-footer/page-footer';
import { TabName } from '../../const';

function FilmPage(): JSX.Element {
  const activeTabName = useSelector(getActiveTabName);
  let content: JSX.Element;
  switch (activeTabName) {
    case TabName.Details:
      content = <FilmPageDetails />;
      break;
    case TabName.Reviews:
      content = <FilmPageReviews />;
      break;
    default:
      content = <FilmPageOverview />;
  }

  return (
    <>
      <HiddenComponent />

      <section className="film-card film-card--full">
        <FilmPageTop />
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmPagePoster />
            <div className="film-card__desc">
              { content }
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <FilmPageAlike />
        <PageFooter />
      </div>
    </>
  );
}

export default FilmPage;
