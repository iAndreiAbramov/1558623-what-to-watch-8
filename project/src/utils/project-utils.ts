import { ALL_GENRES_TAB_NAME, MAX_GENRES_NUMBER } from '../const';
import { FilmDataTypesFront } from '../types/film-data-types';

export const getGenres = (filmsList: FilmDataTypesFront[]): string[]  => {
  const genresFromList = Array.from(new Set(filmsList.map((item) => item.genre)));

  return [ALL_GENRES_TAB_NAME].concat(genresFromList.sort()).slice(0, MAX_GENRES_NUMBER);
};

export const filterFilmsByGenre = (filmsList: FilmDataTypesFront[], genre: string): FilmDataTypesFront[] => {
  if (genre === ALL_GENRES_TAB_NAME) {
    return filmsList;
  }
  return filmsList.filter((film) => film.genre === genre);
};
