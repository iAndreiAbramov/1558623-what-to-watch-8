export type FilmDataTypesBack = {
  id: string,
  name: string,
  ['poster_image']: string,
  ['preview_image']: string,
  ['background_image']: string,
  ['background_color']: string,
  ['video_link']: string,
  ['preview_video_link']: string,
  description: string,
  rating: number,
  ['scores_count']: number,
  director: string,
  starring: string[],
  ['run_time']: number,
  genre: string,
  released: string,
  ['is_favorite']: boolean,
}

export type FilmDataTypesFront = {
  id: string,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: string,
  isFavorite: boolean,
}

export type FilmIntermediateTypes = {
  ['poster_image']?: string,
  ['preview_image']?: string,
  ['background_image']?: string,
  ['background_color']?: string,
  ['video_link']?: string,
  ['preview_video_link']?: string,
  ['scores_count']?: number,
  ['run_time']?: number,
  ['is_favorite']?: boolean,
};

export type FilmCardTypes = {
  id: string,
  name: string,
  posterImage: string,
  previewImage: string,
  previewVideoLink: string,
}
