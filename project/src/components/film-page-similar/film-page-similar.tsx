import React from 'react';
import { useSelector } from 'react-redux';
import ErrorMessageSmall from '../error-message-small/error-message-small';
import { FetchStatus, SIMILAR_FILMS_NUMBER } from '../../const';
import FilmCard from '../film-card/film-card';
import { getSimilarFilms, getSimilarGetStatus } from '../../store/selectors';

function FilmPageSimilar(): JSX.Element {
  const similarFilmsData = useSelector(getSimilarFilms);
  const status = useSelector(getSimilarGetStatus);

  const similarFilms = similarFilmsData
    .slice(0, SIMILAR_FILMS_NUMBER)
    .map((film) => {
      const { name, posterImage, id, previewVideoLink, previewImage } = film;
      return (
        <FilmCard
          key={ id }
          id={ id }
          name={ name }
          posterImage={ posterImage }
          previewVideoLink={ previewVideoLink }
          previewImage={ previewImage }
        />
      );
    });

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {
          status === FetchStatus.Error
          && <ErrorMessageSmall />
        }
        { similarFilms }
      </div>
    </section>
  );
}

export default FilmPageSimilar;
