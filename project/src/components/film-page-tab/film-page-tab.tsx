import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveTabName, getCurrentFilmData } from '../../store/selectors';
import { getCurrentFilmReviewsAction } from '../../store/api-actions';
import { setActiveTabAction } from '../../store/action-creators';
import { TabName } from '../../const';

function FilmPageTab(props: { name: string }): JSX.Element {
  const activeTabName = useSelector(getActiveTabName);
  const { id } = useSelector(getCurrentFilmData);
  const location = useLocation();
  const dispatch = useDispatch();
  const { name } = props;

  const tabClassName = name === activeTabName
    ? 'film-nav__item film-nav__item--active'
    : 'film-nav__item';

  const handleTabClick = () => {
    dispatch(setActiveTabAction(name));
    if (name === TabName.Reviews) {
      dispatch(getCurrentFilmReviewsAction(id));
    }
  }

  return (
    <li className={ tabClassName }>
      <Link
        to={ location.pathname }
        className="film-nav__link"
        onClick={ handleTabClick }
      >
        { name }
      </Link>
    </li>
  );
}

export default FilmPageTab;
