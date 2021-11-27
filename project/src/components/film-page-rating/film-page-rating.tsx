import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentFilmData } from '../../store/selectors';
import { getGradeFromRating } from '../../utils/project-utils';
import { RATING_DIGITS } from '../../const';

function FilmPageRating(): JSX.Element {
  const { rating, scoresCount } = useSelector(getCurrentFilmData);
  const ratingString = rating.toFixed(RATING_DIGITS);
  const scoresString = `${ scoresCount } ratings`;
  const grade = getGradeFromRating(rating);

  return (
    <div className="film-rating" data-testid="film-page-rating">
      <div className="film-rating__score">{ ratingString }</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{ grade }</span>
        <span className="film-rating__count">{ scoresString }</span>
      </p>
    </div>
  );
}

export default FilmPageRating;
