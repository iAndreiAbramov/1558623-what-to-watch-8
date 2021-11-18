import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveTabName } from '../../store/selectors';
import { setActiveTabAction } from '../../store/action-creators';

function FilmPageTab(props: { name: string }): JSX.Element {
  const activeTabName = useSelector(getActiveTabName);
  const location = useLocation();
  const dispatch = useDispatch();
  const { name } = props;

  const tabClassName = name === activeTabName
    ? 'film-nav__item film-nav__item--active'
    : 'film-nav__item';

  return (
    <li className={ tabClassName }>
      <Link
        to={ location.pathname }
        className="film-nav__link"
        onClick={ () => dispatch(setActiveTabAction(name)) }
      >
        { name }
      </Link>
    </li>
  );
}

export default FilmPageTab;
