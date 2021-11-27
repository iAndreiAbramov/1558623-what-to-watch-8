import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentFilmData } from '../../store/selectors';

function FilmPageOverviewText(): JSX.Element {
  const { description, director, starring } = useSelector(getCurrentFilmData);
  const directorString = `Director: ${ director }`;
  const starringString = `Starring: ${starring.join(', ')}`;

  return (
    <div className="film-card__text" data-testid="film-page-overview-text">
      { description }

      <p className="film-card__director">
        <strong>{ directorString }</strong>
      </p>

      <p className="film-card__starring">
        <strong>{ starringString }</strong>
      </p>
    </div>
  );
}

export default FilmPageOverviewText;
