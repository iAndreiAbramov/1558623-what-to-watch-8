import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentFilmData } from '../../store/selectors';
import HiddenComponent from '../hidden-component/hidden-component';
import PageHeader from '../page-header/page-header';
import AddReviewForm from '../add-review-form/add-review-form';

function AddReviewPage(): JSX.Element {
  const { id, name, backgroundImage, posterImage } = useSelector(getCurrentFilmData);
  return (
    <>
      <HiddenComponent />

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={ backgroundImage } alt={ name } />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader />

          <div className="film-card__poster film-card__poster--small">
            <img
              src={ posterImage }
              alt={ `${ posterImage } poster` }
              width="218"
              height="327"
            />
          </div>
        </div>

        <AddReviewForm
          id={ id }
        />
      </section>
    </>
  );
}

export default AddReviewPage;
