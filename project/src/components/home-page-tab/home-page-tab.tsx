import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute } from '../../const';
import { getActiveTabName } from '../../store/selectors';
import { setActiveTabAction } from '../../store/action-creators';

type HomePageTabTypes = {
  name: string,
}

function HomePageTab(props: HomePageTabTypes): JSX.Element {
  const dispatch = useDispatch();
  const { name } = props;
  const activeTabName = useSelector(getActiveTabName);
  const className = name === activeTabName
    ? 'catalog__genres-item catalog__genres-item--active'
    : 'catalog__genres-item';

  return (
    <li className={ className }>
      <Link
        to={ AppRoute.Main }
        className="catalog__genres-link"
        onClick={() => dispatch(setActiveTabAction(name)) }
      >
        { name }
      </Link>
    </li>
  );
}

export default HomePageTab;
