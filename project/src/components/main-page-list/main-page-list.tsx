import React from 'react';
import FilmCard from '../film-card/film-card';
import { FilmDataTypesFront } from '../../types/film-data-types';

type HomePageListTypes = {
  filmsList: FilmDataTypesFront[];
}

function MainPageList(props: HomePageListTypes): JSX.Element {
  const { filmsList } = props;
  const listContent = filmsList.map((film) => {
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

  return (
    <div className="catalog__films-list">
      { listContent }
    </div>
  );
}

export default MainPageList;
