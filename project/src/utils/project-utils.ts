import { ALL_GENRES_TAB_NAME, MAX_GENRES_NUMBER, Rating } from '../const';
import { FilmDataTypesFront } from '../types/film-data-types';

const MINUTES_IN_HOUR = 60;

export const getGenres = (filmsList: FilmDataTypesFront[]): string[] => {
  const genresFromList = Array.from(new Set(filmsList.map((item) => item.genre)));

  return [ALL_GENRES_TAB_NAME].concat(genresFromList.sort()).slice(0, MAX_GENRES_NUMBER);
};

export const filterFilmsByGenre = (filmsList: FilmDataTypesFront[], genre: string): FilmDataTypesFront[] => {
  if (genre === ALL_GENRES_TAB_NAME) {
    return filmsList;
  }

  return filmsList.filter((film) => film.genre === genre);
};

export const getFormattedRunTime = (minutes: number): string => {
  const hours = Math.floor(minutes / MINUTES_IN_HOUR);
  const min = minutes - hours * MINUTES_IN_HOUR;
  return `${ hours }h ${ min }m`;
}

export const getGradeFromRating = (rating: number): Rating => {
  if (rating >= 10) {
    return Rating.Awesome;
  }
  if (rating >= 8) {
    return Rating.VeryGood;
  }
  if (rating >= 5) {
    return Rating.Good;
  }
  if (rating >= 3) {
    return Rating.Normal;
  }
  if (rating >= 0) {
    return Rating.Bad;
  }
  return Rating.Undefined;
}
