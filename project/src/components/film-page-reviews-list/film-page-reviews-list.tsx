import React from 'react';
import { useSelector } from 'react-redux';
import ErrorMessageSmall from '../error-message-small/error-message-small';
import { FetchStatus, NUMBER_OF_COLUMNS } from '../../const';
import FilmPageReview from '../film-page-review/film-page-review';
import { getCommentsGetStatus, getCurrentFilmReviews } from '../../store/selectors';
import SpinnerSmall from '../spinner-small/spinner-small';

function FilmPageReviewsList(): JSX.Element {
  const currentFilmReviews = useSelector(getCurrentFilmReviews);
  const commentsGetStatus = useSelector(getCommentsGetStatus);
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
    <div
      className="film-card__reviews film-card__row"
      data-testid="film-page-reviews-list"
    >
      {
        commentsGetStatus === FetchStatus.InProgress
        &&
        <SpinnerSmall />
      }
      {
        commentsGetStatus === FetchStatus.Success
        &&
        <>
          <div className="film-card__reviews-col" data-testid="reviews-left">
            { reviewsLeft }
          </div>
          <div className="film-card__reviews-col" data-testid="reviews-right">
            { reviewsRight }
          </div>
        </>
      }
      {
        commentsGetStatus === FetchStatus.Error
        && <ErrorMessageSmall />
      }
    </div>
  );
}

export default FilmPageReviewsList;
