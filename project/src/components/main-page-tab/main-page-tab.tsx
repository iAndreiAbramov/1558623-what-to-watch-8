import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute } from '../../const';
import { getActiveFilterName } from '../../store/selectors';
import { setActiveFilterAction } from '../../store/action-creators';

type HomePageTabTypes = {
  name: string,
}

function MainPageTab(props: HomePageTabTypes): JSX.Element {
  const dispatch = useDispatch();
  const { name } = props;
  const activeTabName = useSelector(getActiveFilterName);
  const className = name === activeTabName
    ? 'catalog__genres-item catalog__genres-item--active'
    : 'catalog__genres-item';

  const handleTabClick = () => {
    dispatch(setActiveFilterAction(name));
  };

  return (
    <li className={ className }>
      <Link
        to={ AppRoute.Main }
        className="catalog__genres-link"
        onClick={ handleTabClick }
      >
        { name }
      </Link>
    </li>
  );
}

export default MainPageTab;
