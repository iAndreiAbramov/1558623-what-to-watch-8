import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppRoute } from '../../const';
import { FilmCardTypes } from '../../types/film-data-types';
import { getCurrentFilmDataAction } from '../../store/api-actions';

function FilmCard(props: FilmCardTypes): JSX.Element {
  const dispatch = useDispatch();
  const { name, posterImage, id } = props;

  const handleLinkClick = () => {
    dispatch(getCurrentFilmDataAction(id));
  };

  return (
    <article className="small-film-card catalog__films-card">
      <Link
        to={ `${ AppRoute.Film }/${ id }` }
        onClick={ handleLinkClick }
      >
        <div className="small-film-card__image">
          <img src={ posterImage } alt={ name } width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={ `${ AppRoute.Film }/${ id }` }
          onClick={ handleLinkClick }
        >
          { name }
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
