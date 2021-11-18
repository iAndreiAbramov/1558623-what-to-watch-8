import React from 'react';

function FilmPageRating(): JSX.Element {
  return (
    <div className="film-rating">
      <div className="film-rating__score">8,9</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">Very good</span>
        <span className="film-rating__count">240 ratings</span>
      </p>
    </div>
  );
}

export default FilmPageRating;
