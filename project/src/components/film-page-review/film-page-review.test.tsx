import React from 'react';
import { render, screen } from '@testing-library/react';
import FilmPageReview from './film-page-review';
import { formatDateForComment } from '../../utils/project-utils';
import { RATING_DIGITS } from '../../const';

const TEST_NAME = 'test-name';
const TEST_RATING = 5.5;
const TEST_REVIEW = 'test-review';
const TEST_DATE = '2021-10-29T14:35:14.031Z';

describe('Component FilmPageReview', () => {
  it('should render correctly', () => {
    render(
      < FilmPageReview
        userName={ TEST_NAME }
        rating={ TEST_RATING }
        review={ TEST_REVIEW }
        date={ TEST_DATE }
      />);
    expect(screen.getByText(TEST_NAME)).toBeInTheDocument();
    expect(screen.getByText(TEST_RATING.toFixed(RATING_DIGITS))).toBeInTheDocument();
    expect(screen.getByText(TEST_REVIEW)).toBeInTheDocument();
    expect(screen.getByText(formatDateForComment(TEST_DATE))).toBeInTheDocument();
  });
});
