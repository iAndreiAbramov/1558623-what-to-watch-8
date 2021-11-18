import React from 'react';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';
import HiddenComponent from '../hidden-component/hidden-component';
import FilmPageAlike from '../film-page-alike/film-page-alike';
import FilmPageTabs from '../film-page-tabs/film-page-tabs';

function FilmPage(): JSX.Element {
  return (
    <>
      <HiddenComponent />

      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmPageTabs />

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>
                  In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
                </p>

                <p>
                  Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying
                  the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies
                  mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
                  murder.
                </p>

                <p className="film-card__director">
                  <strong>Director: Wes Anderson</strong>
                </p>

                <p className="film-card__starring">
                  <strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong>
                </p>
              </div>
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
