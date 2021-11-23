import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchStatus, INITIAL_RATING, REVIEW_MAX_LENGTH, REVIEW_MIN_LENGTH, StarRating } from '../../const';
import { getCommentPostStatus } from '../../store/selectors';
import { postReviewAction } from '../../store/api-actions';

type AddReviewFormTypes = {
  id: string,
  backgroundColor: string,
}

function AddReviewForm(props: AddReviewFormTypes): JSX.Element {
  const dispatch = useDispatch();
  const postStatus = useSelector(getCommentPostStatus);
  const { id, backgroundColor } = props;
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(INITIAL_RATING);
  const [starsTouched, setStarsTouched] = useState(false);

  useEffect(() => {
    if (postStatus === FetchStatus.Error) {
      setIsSubmitDisabled(false);
      setIsInputDisabled(false);
    }
  }, [postStatus]);

  useEffect(() => {
    if (comment.length >= REVIEW_MIN_LENGTH
      && comment.length <= REVIEW_MAX_LENGTH
      && starsTouched
    ) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [comment, starsTouched]);

  const handleReviewInput = (evt: FormEvent<HTMLTextAreaElement>) => {
    setComment(evt.currentTarget.value);
  };

  const handleRatingInput = (evt: FormEvent<HTMLInputElement>) => {
    setRating(Number(evt.currentTarget.value));
    setStarsTouched(true);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsSubmitDisabled(true);
    setIsInputDisabled(true);
    dispatch(postReviewAction({ id, comment, rating }));
  };

  return (
    <div className="add-review">
      <form
        onSubmit={ handleSubmit }
        className="add-review__form"
      >
        <div className="rating">
          <div className="rating__stars">
            <input
              disabled={ isInputDisabled }
              defaultChecked={ rating === StarRating.Ten }
              onChange={ handleRatingInput }
              className="rating__input"
              id="star-10"
              type="radio"
              name="rating"
              value={ StarRating.Ten }
            />
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input
              defaultChecked={ rating === StarRating.Nine }
              onChange={ handleRatingInput }
              disabled={ isInputDisabled }
              className="rating__input"
              id="star-9"
              type="radio"
              name="rating"
              value={ StarRating.Nine }
            />
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input
              defaultChecked={ rating === StarRating.Eight }
              onChange={ handleRatingInput }
              disabled={ isInputDisabled }
              className="rating__input"
              id="star-8"
              type="radio"
              name="rating"
              value={ StarRating.Eight }
            />
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input
              defaultChecked={ rating === StarRating.Seven }
              onChange={ handleRatingInput }
              disabled={ isInputDisabled }
              className="rating__input"
              id="star-7"
              type="radio"
              name="rating"
              value={ StarRating.Seven }
            />
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input
              defaultChecked={ rating === StarRating.Six }
              onChange={ handleRatingInput }
              disabled={ isInputDisabled }
              className="rating__input"
              id="star-6"
              type="radio"
              name="rating"
              value={ StarRating.Six }
            />
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input
              defaultChecked={ rating === StarRating.Five }
              onChange={ handleRatingInput }
              disabled={ isInputDisabled }
              className="rating__input"
              id="star-5"
              type="radio"
              name="rating"
              value={ StarRating.Five }
            />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input
              defaultChecked={ rating === StarRating.Four }
              onChange={ handleRatingInput }
              disabled={ isInputDisabled }
              className="rating__input"
              id="star-4"
              type="radio"
              name="rating"
              value={ StarRating.Four }
            />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input
              defaultChecked={ rating === StarRating.Three }
              onChange={ handleRatingInput }
              disabled={ isInputDisabled }
              className="rating__input"
              id="star-3"
              type="radio"
              name="rating"
              value={ StarRating.Three }
            />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input
              defaultChecked={ rating === StarRating.Two }
              onChange={ handleRatingInput }
              disabled={ isInputDisabled }
              className="rating__input"
              id="star-2"
              type="radio"
              name="rating"
              value={ StarRating.Two }
            />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input
              defaultChecked={ rating === Number(StarRating.One) }
              onChange={ handleRatingInput }
              disabled={ isInputDisabled }
              className="rating__input"
              id="star-1"
              type="radio"
              name="rating"
              value={ StarRating.One }
            />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            style={ { backgroundColor: backgroundColor, filter: 'brightness(1.3)' } }
            value={ comment }
            onChange={ handleReviewInput }
            disabled={ isInputDisabled }
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
          />
          <div
            style={ { backgroundColor: backgroundColor, filter: 'brightness(1.3)' } }
            className="add-review__submit"
          >
            <button
              style={ { color: backgroundColor, filter: 'brightness(0.3)' } }
              className="add-review__btn"
              type="submit"
              disabled={ isSubmitDisabled }
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
