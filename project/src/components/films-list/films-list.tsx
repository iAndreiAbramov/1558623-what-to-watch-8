import React from 'react';
import FilmCard from '../film-card/film-card';
import { FilmDataTypesFront } from '../../types/film-data-types';

type HomePageListTypes = {
  filmsList: FilmDataTypesFront[];
}

function FilmsList(props: HomePageListTypes): JSX.Element {
  const { filmsList } = props;
  let listContent;
  if (filmsList.length > 0) {
    listContent = filmsList.map((film) => {
      const { id, name, previewImage, posterImage, previewVideoLink } = film;
      return (
        <FilmCard
          key={ id }
          id={ id }
          name={ name }
          previewImage={ previewImage }
          previewVideoLink={ previewVideoLink }
          posterImage={ posterImage }
        />
      );
    });
  } else {
    listContent = null;
  }

  return (
    <div className="catalog__films-list" data-testid="films-list">
      { listContent }
    </div>
  );
}

export default FilmsList;
