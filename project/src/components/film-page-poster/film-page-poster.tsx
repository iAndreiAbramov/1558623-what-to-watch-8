import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentFilmData } from '../../store/selectors';

function FilmPagePoster(): JSX.Element {
  const { posterImage, name } = useSelector(getCurrentFilmData);

  return (
    <div
      className="film-card__poster film-card__poster--big"
      data-testid="film-page-poster"
    >
      <img
        src={ posterImage }
        alt={ `${ name } poster` }
        width="218"
        height="327"
      />
    </div>
  );
}

export default React.memo(FilmPagePoster);
