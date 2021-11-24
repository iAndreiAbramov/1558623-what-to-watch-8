import { ALL_GENRES_TAB_NAME } from '../const';
import { filmFrontMockOne, filmFrontMockThree, filmFrontMockTwo, filmsFrontMock } from '../mocks/film-mocks';
import {
  filterFilmsByGenre, formatDateForComment,
  formatRemainingTime,
  getFormattedRunTime,
  getGenres,
  getGradeFromRating
} from './project-utils';

describe('Function getGenres', () => {
  it('should return sorted array of genres', () => {
    const expectedGenres = [
      ALL_GENRES_TAB_NAME,
      'A-genre',
      'B-genre',
      'C-genre',
    ];
    expect(getGenres(filmsFrontMock)).toEqual(expectedGenres);
  });
});

describe('Function filterFilmsByGenre', () => {
  it('should return passed array if genre name is "All genres"', () => {
    expect(filterFilmsByGenre(filmsFrontMock, ALL_GENRES_TAB_NAME)).toEqual(filmsFrontMock);
  });

  it('should return corresponding film', () => {
    expect(filterFilmsByGenre(filmsFrontMock, 'A-genre')).toEqual([filmFrontMockOne]);
    expect(filterFilmsByGenre(filmsFrontMock, 'B-genre')).toEqual([filmFrontMockTwo]);
    expect(filterFilmsByGenre(filmsFrontMock, 'C-genre')).toEqual([filmFrontMockThree]);
  });
});

describe('Function getFormattedRunTime', () => {
  it('should return time string in format "Hh Mm"', () => {
    expect(getFormattedRunTime(100)).toBe('1h 40m');
  });
});

describe('Function formatRemainingTime', () => {
  it('should return time string in format"-HH MM SS"', () => {
    expect(formatRemainingTime(3700)).toBe('-01:01:40');
  });
  it('should return time string in format"-MM SS"', () => {
    expect(formatRemainingTime(100)).toBe('-01:40');
  });
});

describe('Function getGradeFromRating', () => {
  it('should return "Awesome"', () => {
    expect(getGradeFromRating(10)).toBe('Awesome');
  });
  it('should return "Very good"', () => {
    expect(getGradeFromRating(8)).toBe('Very good');
  });
  it('should return "Good"', () => {
    expect(getGradeFromRating(5)).toBe('Good');
  });
  it('should return "Normal"', () => {
    expect(getGradeFromRating(3)).toBe('Normal');
  });
  it('should return "Bad"', () => {
    expect(getGradeFromRating(0)).toBe('Bad');
  });
});

describe('Function formatDateForComment', () => {
  it('should return date in format "M D, YYYY"', () => {
    expect(formatDateForComment('2013-10-29T14:35:14.031Z')).toBe('October 29, 2013');
  });
});
