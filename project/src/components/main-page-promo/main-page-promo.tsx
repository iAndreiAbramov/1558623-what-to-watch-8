import React from 'react';
import { useSelector } from 'react-redux';
import ButtonMyList from '../button-my-list/button-my-list';
import ButtonPlay from '../button-play/button-play';
import { getPromoData } from '../../store/selectors';
import PageHeader from '../page-header/page-header';

function MainPagePromo(): JSX.Element {
  const promoData = useSelector(getPromoData);
  const { id, videoLink, name, posterImage, backgroundImage, released, genre, isFavorite } = promoData;

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
              <ButtonMyList
                id={ id }
                isFavorite={ isFavorite }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPagePromo;
