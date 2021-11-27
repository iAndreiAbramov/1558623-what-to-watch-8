import React from 'react';
import * as Redux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import AddReviewForm from './add-review-form';
import { mockStoreWithAuth } from '../../mocks/store-mocks';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const NUMBER_OF_STARS = 10;
const FIRST_TEST_STAR = 0;
const EIGHTH_TEST_STAR = 7;
const RIGHT_COMMENT = 'This is a right comment. It means, that it\'s length is more than 50 symbols and less than' +
  ' 400 symbols.';
const SHORT_COMMENT = 'Too short to be submited...';
const LONG_COMMENT = 'Too long to be submited. Too long to be submited. Too long to be submited. Too long to be' +
  ' submited. Too long to be submited. Too long to be submited. Too long to be submited. Too long to be submited.Too' +
  ' long to be submited. Too long to be submited. Too long to be submited. Too long to be submited. Too long to be' +
  ' submited. Too long to be submited. Too long to be submited. Too long to be submited.';

describe('Component AddReviewForm', () => {
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  const testId = '1';
  const testBackgroundColor = 'test-background';
  const fakeApp = (
    <Provider store={ store }>
      <BrowserRouter>
        <AddReviewForm id={ testId } backgroundColor={ testBackgroundColor } />
      </BrowserRouter>
    </Provider>);

  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByTestId('add-review-form')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(NUMBER_OF_STARS);
  });

  it('should render user input', () => {
    render(fakeApp);
    const textBox = screen.getByRole('textbox');
    const stars = screen.getAllByRole('radio');

    userEvent.type(textBox, 'test-text');
    expect(screen.getByText('test-text')).toBeInTheDocument();

    userEvent.click(stars[FIRST_TEST_STAR]);
    expect(stars[FIRST_TEST_STAR]).toBeChecked();
    expect(stars[EIGHTH_TEST_STAR]).not.toBeChecked();
  });

  it('should dispatch action on submit only if requirements met', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(fakeApp);
    const button = screen.getByRole('button');
    const textBox = screen.getByRole('textbox');
    const stars = screen.getAllByRole('radio');

    userEvent.click(button);
    expect(dispatch).toBeCalledTimes(0);

    userEvent.type(textBox, SHORT_COMMENT);
    userEvent.click(stars[FIRST_TEST_STAR]);
    userEvent.click(button);
    expect(dispatch).toBeCalledTimes(0);

    userEvent.type(textBox, RIGHT_COMMENT);
    userEvent.click(stars[FIRST_TEST_STAR]);
    userEvent.click(button);
    expect(dispatch).toBeCalledTimes(1);

    userEvent.type(textBox, LONG_COMMENT);
    userEvent.click(stars[FIRST_TEST_STAR]);
    userEvent.click(button);
    expect(dispatch).toBeCalledTimes(1);
  });
});
