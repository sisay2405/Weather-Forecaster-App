import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../Components/SearchBar';

test('renders "Search" as a text', () => {
  render(<SearchBar />);
  const searchElement = screen.getByText('Search');
  expect(searchElement).toBeInTheDocument();
});
test('should the button have attribute submit', () => {
  render(<SearchBar />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute('type', 'submit');
});
test('should the input has a place holder Atlantic 32219 or Jacksonville Fl', () => {
  render(<SearchBar />);
  const placeHolder = screen.getByPlaceholderText(/Atlantic 32219 or Jacksonville Fl./i);
  expect(placeHolder).toBeInTheDocument();
});

// test('includes an input fields and a submit button with text "Search"', () => {
//   render(<SearchBar />);
//   const inputfield = screen.getByLabelText('Weather Info For');
//   expect(inputfield).toBeInTheDocument();
// });
test('button has correct color before and after click', () => {
  render(<SearchBar />);
  const colorButton = screen.getByRole('button', 'search');
  expect(colorButton).toHaveStyle({ backgroundColor: 'Lightblue' });
  userEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'Lightblue' });
  expect(colorButton).toHaveTextContent('Search');
});
test('the "Search" button should be disabled until input is filled', () => {
  render(<SearchBar />);

  const sumButton = screen.getByRole('button', {
    name: /search/i,
  });
  expect(sumButton).toBeDisabled();
  // userEvent.type(firstNum, '10');
});
