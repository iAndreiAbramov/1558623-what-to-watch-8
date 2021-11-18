import React from 'react';
import { useSelector } from 'react-redux';
import { getPromoData } from '../../store/selectors';
import PageHeader from '../page-header/page-header';

function HomePagePromo(): JSX.Element {
  const promoData = useSelector(getPromoData);
  const { name, posterImage, backgroundImage, released, genre, isFavorite } = promoData;
  const myListIcon = isFavorite
    ? '#in-list'
    : '#add';

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
            <img src={ posterImage } alt={ `${ name } poster` } width="218"
              height="327" />
          </div>

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

              {/*{//todo: Добавление в избранное по клику}*/}
              <button className="btn btn--list film-card__button" type="button">
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

export default HomePagePromo;
