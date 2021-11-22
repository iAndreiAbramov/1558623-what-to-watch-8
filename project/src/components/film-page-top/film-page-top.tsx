import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus, FetchStatus, NotificationMessage } from '../../const';
import { getAuthStatus, getCurrentFilmData } from '../../store/selectors';
import PageHeader from '../page-header/page-header';
import { postFilmIsFavoriteAction } from '../../store/api-actions';
import { setCommentPostStatusAction } from '../../store/action-creators';
import { notifyError } from '../../utils/project-utils';
import PlayButton from '../play-button/play-button';

function FilmPageTop(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, posterImage, videoLink, runTime, backgroundImage, name, genre, released, isFavorite } = useSelector(getCurrentFilmData);
  const authorization = useSelector(getAuthStatus);
  const myListIcon = isFavorite ? '#in-list' : '#add';
  const isFavoritePostNumber = isFavorite ? 0 : 1;

  const handleMyListClick = (): void => {
    if (authorization !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
    dispatch(postFilmIsFavoriteAction(id, isFavoritePostNumber));
  };

  const handleAddReviewClick = (): void => {
    if (authorization !== AuthorizationStatus.Auth) {
      notifyError(NotificationMessage.Unauthorized);
    }
    dispatch(setCommentPostStatusAction(FetchStatus.Undefined));
  };

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
            <PlayButton
              videoLink={ videoLink }
            />

            <button
              onClick={ handleMyListClick }
              className="btn btn--list film-card__button"
              type="button"
            >
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref={ myListIcon } />
              </svg>
              <span>My list</span>
            </button>

            <Link
              onClick={ handleAddReviewClick }
              to={ `${ AppRoute.Film }/${ id }/review` }
              className="btn film-card__button"
            >
              Add review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmPageTop;
