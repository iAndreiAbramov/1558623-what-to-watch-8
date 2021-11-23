import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import ButtonPlay from '../button-play/button-play';
import { getAuthStatus, getPromoData } from '../../store/selectors';
import PageHeader from '../page-header/page-header';
import { postPromoIsFavoriteAction } from '../../store/api-actions';

function MainPagePromo(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const promoData = useSelector(getPromoData);
  const authorization = useSelector(getAuthStatus);
  const { id, videoLink, name, posterImage, backgroundImage, released, genre, isFavorite } = promoData;
  const myListIcon = isFavorite ? '#in-list' : '#add';

  const isFavoritePostNumber = isFavorite ? 0 : 1;

  const handleMyListClick = () => {
    if (authorization !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
    dispatch(postPromoIsFavoriteAction(id, isFavoritePostNumber));
  };

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={ backgroundImage } alt={ name } />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={ posterImage }
              alt={ `${ name } poster` }
              width="218"
              height="327"
            />
          </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPagePromo;
