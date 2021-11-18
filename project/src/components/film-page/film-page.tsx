import React from 'react';
import FilmPageAlike from '../film-page-alike/film-page-alike';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPagePoster from '../film-page-poster/film-page-poster';
import FilmPageTop from '../film-page-top/film-page-top';
import HiddenComponent from '../hidden-component/hidden-component';
import PageFooter from '../page-footer/page-footer';

function FilmPage(): JSX.Element {
  return (
    <>
      <HiddenComponent />

      <section className="film-card film-card--full">
        <FilmPageTop />
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmPagePoster />
            <div className="film-card__desc">
              <FilmPageOverview />
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
