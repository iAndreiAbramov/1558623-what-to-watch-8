import React from 'react';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import ButtonAddReview from '../button-add-review/button-add-review';
import ButtonMyList from '../button-my-list/button-my-list';
import ButtonPlay from '../button-play/button-play';
import { getAuthStatus, getCurrentFilmData } from '../../store/selectors';
import PageHeader from '../page-header/page-header';

function FilmPageTop(): JSX.Element {
  const authorization = useSelector(getAuthStatus);
  const { id, videoLink, backgroundImage, name, genre, released, isFavorite } = useSelector(getCurrentFilmData);

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
            <ButtonPlay
              videoLink={ videoLink }
            />
            <ButtonMyList
              id={ id }
              isFavorite={ isFavorite }
            />
            {
              authorization === AuthorizationStatus.Auth
              &&
              <ButtonAddReview id={ id } />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmPageTop;
