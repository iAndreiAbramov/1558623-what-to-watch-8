import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute, TabName } from '../../const';
import { getCurrentFilmData } from '../../store/selectors';
import { getCurrentFilmDataAction } from '../../store/api-actions';
import { setActiveTabAction } from '../../store/action-creators';

function Breadcrumbs(): JSX.Element {
  const dispatch = useDispatch();
  const { name, id } = useSelector(getCurrentFilmData);
  const locationId = useParams().id;

  useEffect(() => {
    if (!id && locationId) {
      dispatch(getCurrentFilmDataAction(locationId));
    }
  });

  const handleLinkClick = () => {
    dispatch(setActiveTabAction(TabName.Overview));
  };

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            to={ `${ AppRoute.Film }/${ id }` }
            onClick={ handleLinkClick }
            className="breadcrumbs__link"
          >
            { name }
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link">Add review</span>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
