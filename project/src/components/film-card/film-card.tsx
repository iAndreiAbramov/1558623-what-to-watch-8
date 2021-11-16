import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmCardTypes } from '../../types/film-data-types';

function FilmCard(props: FilmCardTypes) {
  const { name, posterImage, id } = props;
  return (
    <article className="small-film-card catalog__films-card">
      <Link to={ `${ AppRoute.Film }/${ id }` }>
        <div className="small-film-card__image">
          <img src={ posterImage } alt={ name } width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={ `${ AppRoute.Film }/${ id }` }
        >
          { name }
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
