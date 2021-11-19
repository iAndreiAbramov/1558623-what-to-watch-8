import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FetchStatus, TabName } from '../../const';
import { getActiveTabName, getCurrentFilmData, getFilmGetStatus } from '../../store/selectors';
import { getCurrentFilmDataAction, getSimilarFilmsAction } from '../../store/api-actions';
import FilmPageSimilar from '../film-page-similar/film-page-similar';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPagePoster from '../film-page-poster/film-page-poster';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';
import FilmPageTop from '../film-page-top/film-page-top';
import HiddenComponent from '../hidden-component/hidden-component';
import PageFooter from '../page-footer/page-footer';
import SpinnerBig from '../spinner-big/spinner-big';

function FilmPage(): JSX.Element {
  const activeTabName = useSelector(getActiveTabName);
  const { backgroundColor } = useSelector(getCurrentFilmData);
  const { id } = useSelector(getCurrentFilmData);
  const filmGetStatus = useSelector(getFilmGetStatus);
  const dispatch = useDispatch();
  const locationId = useParams().id;

  let content: JSX.Element;
  switch (activeTabName) {
    case TabName.Details:
      content = <FilmPageDetails />;
      break;
    case TabName.Reviews:
      content = <FilmPageReviews />;
      break;
    default:
      content = <FilmPageOverview />;
  }

  useEffect(() => {
    if (!id && locationId) {
      dispatch(getCurrentFilmDataAction(locationId));
      dispatch(getSimilarFilmsAction(locationId));
    }
  });

  return (
    <>
      {
        filmGetStatus === FetchStatus.InProgress
        &&
        <SpinnerBig />
      }
      {
        filmGetStatus === FetchStatus.Success
        &&
        <>
          <HiddenComponent />
          <section className="film-card film-card--full" style={ { backgroundColor: backgroundColor } }>
            <FilmPageTop />
            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <FilmPagePoster />
                <div className="film-card__desc">
                  { content }
                </div>
              </div>
            </div>
          </section>

          <div className="page-content">
            <FilmPageSimilar />
            <PageFooter />
          </div>
        </>
      }
    </>
  );
}

export default FilmPage;
