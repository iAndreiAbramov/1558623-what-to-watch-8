import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, MyListIcon } from '../../const';
import { getAuthStatus } from '../../store/selectors';
import { postFilmIsFavoriteAction, postPromoIsFavoriteAction } from '../../store/api-actions';

type ButtonMyListTypes = {
  id: string,
  isFavorite: boolean,
}

function ButtonMyList(props: ButtonMyListTypes): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authorization = useSelector(getAuthStatus);
  const { id, isFavorite } = props;
  const myListIcon = isFavorite ? MyListIcon.Favorite : MyListIcon.NotFavorite;
  const isFavoritePostNumber = isFavorite ? 0 : 1;

  const handleMyListClick = () => {
    if (authorization !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
    if (window.location.pathname.includes(AppRoute.Film)) {
      dispatch(postFilmIsFavoriteAction(id, isFavoritePostNumber));
    } else {
      dispatch(postPromoIsFavoriteAction(id, isFavoritePostNumber));
    }
  };

  return (
    <button
      onClick={ handleMyListClick }
      className="btn btn--list film-card__button"
      type="button"
      data-testid="button-my-list"
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={ myListIcon } />
      </svg>
      <span>My list</span>
    </button>
  );
}

export default ButtonMyList;
