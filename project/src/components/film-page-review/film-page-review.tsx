import React from 'react';
import { RATING_DIGITS } from '../../const';
import { formatDateForComment } from '../../utils/project-utils';

type FilmPageReviewTypes = {
  userName: string,
  rating: number,
  review: string,
  date: string,
}

function FilmPageReview(props: FilmPageReviewTypes): JSX.Element {
  const { userName, rating, review, date } = props;
  const ratingString = rating.toFixed(RATING_DIGITS);
  const dateString = formatDateForComment(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text"> { review }</p>

        <footer className="review__details">
          <cite className="review__author">{ userName }</cite>
          <time className="review__date" dateTime="2016-12-24">{ dateString }</time>
        </footer>
      </blockquote>

      <div className="review__rating">{ ratingString }</div>
    </div>
  );
}

export default FilmPageReview;
