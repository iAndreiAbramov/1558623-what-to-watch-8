import { FilmDataTypesBack, FilmDataTypesFront, IntermediateFilmTypes } from '../types/film-data-types';
import { UserDataTypesBack, UserDataTypesFront } from '../types/user-data-types';

export const adaptFilmDataToFront = (filmData: FilmDataTypesBack): FilmDataTypesFront => {
  const adaptedData: FilmDataTypesFront & IntermediateFilmTypes = Object.assign(
    {},
    filmData,
    {
      posterImage: filmData['poster_image'],
      previewImage: filmData['preview_image'],
      backgroundImage: filmData['background_image'],
      backgroundColor: filmData['background_color'],
      videoLink: filmData['video_link'],
      previewVideoLink: filmData['preview_video_link'],
      scoresCount: filmData['scores_count'],
      runTime: filmData['run_time'],
      isFavorite: filmData['is_favorite'],
    },
  );

  delete adaptedData['poster_image'];
  delete adaptedData['preview_image'];
  delete adaptedData['background_image'];
  delete adaptedData['background_color'];
  delete adaptedData['video_link'];
  delete adaptedData['preview_video_link'];
  delete adaptedData['scores_count'];
  delete adaptedData['run_time'];
  delete adaptedData['is_favorite'];

  return adaptedData;
};

export const adaptFilmsDataToFront = (filmsData: FilmDataTypesBack[]): FilmDataTypesFront[] => (
  filmsData.map((filmData) => adaptFilmDataToFront(filmData))
);

export const adaptUserDataToFront = (userData: UserDataTypesBack): UserDataTypesFront => {
  const adaptedUserData: UserDataTypesFront & { ['avatar_url']?: string } = Object.assign(
    {},
    userData,
    {
      avatarUrl: userData['avatar_url'],
    },
  );

  delete adaptedUserData['avatar_url'];

  return adaptedUserData;
};
