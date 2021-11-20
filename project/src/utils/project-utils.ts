import { ALL_GENRES_TAB_NAME, MAX_GENRES_NUMBER, MONTHS, NotificationMessage, Rating } from '../const';
import { FilmDataTypesFront } from '../types/film-data-types';
import { ReactText } from 'react';
import { toast } from 'react-toastify';

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

export const formatDateForComment = (date: string): string => {
  const commentDate = new Date(date);
  const month = MONTHS[commentDate.getMonth()];
  const day = commentDate.getDate();
  const year = commentDate.getFullYear();

  return `${ month } ${ day }, ${ year }`;
}

export const notifySuccess = (message: NotificationMessage): ReactText => toast.success(message, {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const notifyError = (message: NotificationMessage): ReactText => toast.error(message, {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const notifyInfo = (message: NotificationMessage): ReactText => toast.info(message, {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});
