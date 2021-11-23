import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppRoute } from '../../const';
import { PlayerDataTypes } from '../../types/player-data-types';
import { setPlayerDataAction } from '../../store/action-creators';

function ButtonPlay(props: PlayerDataTypes): JSX.Element {
  const dispatch = useDispatch();
  const { videoLink } = props;
  const playerData = { videoLink };

  const handleClick = () => {
    dispatch(setPlayerDataAction({ playerData }));
  };

  return (
    <Link
      onClick={ handleClick }
      to={ AppRoute.Player }
      className="btn btn--play film-card__button"
      type="button"
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </Link>
  );
}

export default React.memo(ButtonPlay);
