import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus, FetchStatus, NotificationMessage } from '../../const';
import { getAuthStatus } from '../../store/selectors';
import { notifyError } from '../../utils/project-utils';
import { setCommentPostStatusAction } from '../../store/action-creators';

function ButtonAddReview(props: {id: string}): JSX.Element {
  const dispatch = useDispatch();
  const authorization = useSelector(getAuthStatus);
  const { id } = props;

  const handleAddReviewClick = (): void => {
    if (authorization !== AuthorizationStatus.Auth) {
      notifyError(NotificationMessage.Unauthorized);
    }
    dispatch(setCommentPostStatusAction(FetchStatus.Undefined));
  };

  return (
    <Link
      onClick={ handleAddReviewClick }
      to={ `${ AppRoute.Film }/${ id }/review` }
      className="btn film-card__button"
      data-testid="button-add-review"
    >
      Add review
    </Link>
  );
}

export default React.memo(ButtonAddReview);
