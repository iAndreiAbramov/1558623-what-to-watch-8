import React from 'react';
import { useSelector } from 'react-redux';
import FilmPageReview from '../film-page-review/film-page-review';
import { getCurrentFilmReviews } from '../../store/selectors';
import { NUMBER_OF_COLUMNS } from '../../const';

function FilmPageReviewsList(): JSX.Element {
  const currentFilmReviews = useSelector(getCurrentFilmReviews);
  const reviews = currentFilmReviews.map((film): JSX.Element => {
    const { id, user, rating, comment, date } = film;
    return (
      <FilmPageReview
        key={ id }
        userName={ user.name }
        rating={ rating }
        review={ comment }
        date={ date }
      />
    );
  });

  const reviewsLeft = reviews.slice(0, Math.ceil(reviews.length / NUMBER_OF_COLUMNS));
  const reviewsRight = reviews.slice(reviewsLeft.length);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        { reviewsLeft }
      </div>
      <div className="film-card__reviews-col">
        { reviewsRight }
      </div>
    </div>
  );
}

export default FilmPageReviewsList;
