import React from 'react';
import { useSelector } from 'react-redux';
import AddReviewForm from '../add-review-form/add-review-form';
import { getCurrentFilmData } from '../../store/selectors';
import HiddenComponent from '../hidden-component/hidden-component';
import PageHeader from '../page-header/page-header';

function AddReviewPage(): JSX.Element {
  const { id, name, backgroundImage, posterImage, backgroundColor } = useSelector(getCurrentFilmData);
  return (
    <>
      <HiddenComponent />

      <section
        style={ { backgroundColor: backgroundColor } }
        className="film-card film-card--full"
      >
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
          backgroundColor={ backgroundColor }
        />
      </section>
    </>
  );
}

export default AddReviewPage;
