import React from 'react';
import PageHeader from '../page-header/page-header';
import { useSelector } from 'react-redux';
import { getCurrentFilmData } from '../../store/selectors';

function FilmPageTop(): JSX.Element {
  const { backgroundImage, name, genre, released } = useSelector(getCurrentFilmData);

  return (
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src={ backgroundImage } alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader />

      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">{ name }</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{ genre }</span>
            <span className="film-card__year">{ released }</span>
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
  );
}

export default FilmPageTop;
