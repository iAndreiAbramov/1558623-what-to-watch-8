import { adaptFilmDataToFront, adaptFilmsDataToFront, adaptUserDataToFront } from './adapters';
import {
  filmBackMockOne,
  filmBackMockThree,
  filmBackMockTwo,
  filmFrontMockOne, filmFrontMockThree,
  filmFrontMockTwo, filmsBackMock, filmsFrontMock
} from '../mocks/film-mocks';
import { userBackMock, userFrontMock } from '../mocks/user-mocks';

describe('Function adaptFilmDataToFront', () => {
  it('should take back film data and return front film data', () => {
    expect(adaptFilmDataToFront(filmBackMockOne)).toEqual(filmFrontMockOne);
    expect(adaptFilmDataToFront(filmBackMockTwo)).toEqual(filmFrontMockTwo);
    expect(adaptFilmDataToFront(filmBackMockThree)).toEqual(filmFrontMockThree);
  });
});

describe('Function adaptFilmsDataToFront', () => {
  it('should take back film data [] and return front film data []', () => {
    expect(adaptFilmsDataToFront(filmsBackMock)).toEqual(filmsFrontMock);
  });
});

describe('Function adaptUserDataToFront', () => {
  it('should take back user data and return front user data', () => {
    expect(adaptUserDataToFront(userBackMock)).toEqual(userFrontMock);
  })
})
