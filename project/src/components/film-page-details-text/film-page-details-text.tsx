import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentFilmData } from '../../store/selectors';
import { getFormattedRunTime } from '../../utils/project-utils';

function FilmPageDetailsText(): JSX.Element {
  const { director, starring, runTime, genre, released } = useSelector(getCurrentFilmData);
  const actors = starring.map((actor) => (
    `${ actor }, `
  ));
  const formattedRunTime = getFormattedRunTime(runTime);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{ director }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            { actors }
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{ formattedRunTime }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{ genre }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{ released }</span>
        </p>
      </div>
    </div>
  );
}

export default FilmPageDetailsText;
