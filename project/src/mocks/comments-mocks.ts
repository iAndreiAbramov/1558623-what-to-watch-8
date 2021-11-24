import { ReviewPostTypes, ReviewTypes } from '../types/review-types';

export const commentMockOne: ReviewTypes = {
  id: '1',
  user: {
    id: '1',
    name: 'name-one',
  },
  rating: 8.1,
  comment: 'comment-1',
  date: '2011-10-29T14:35:14.031Z',
};

export const commentMockTwo: ReviewTypes = {
  id: '2',
  user: {
    id: '2',
    name: 'name-one',
  },
  rating: 8.2,
  comment: 'comment-2',
  date: '2012-10-29T14:35:14.031Z',
};

export const commentMockThree: ReviewTypes = {
  id: '3',
  user: {
    id: '3',
    name: 'name-one',
  },
  rating: 8.3,
  comment: 'comment-3',
  date: '2013-10-29T14:35:14.031Z',
};

export const commentsMocks: ReviewTypes[] = [commentMockOne, commentMockTwo, commentMockThree];

export const reviewPostMockOne: ReviewPostTypes = {
  id: '1',
  rating: 8.1,
  comment: 'comment-1',
};
