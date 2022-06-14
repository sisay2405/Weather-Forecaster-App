import React from 'react';
import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';
/// / import userEvent from '@testing-library/user-event';
import SearchBar from '../Components/SearchBar';

test('renders "Search" as a text', () => {
  render(<SearchBar />);
  const searchElement = screen.getByText('Search');
  expect(searchElement).toBeInTheDocument();
});

test('should render searchBar components', () => {
  render(<SearchBar />);
  const buttonElement = screen.getByRole('button');
  const placeHolder = screen.getByPlaceholderText(/Atlantic 32219 or Jacksonville Fl./i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute('type', 'submit');
  expect(placeHolder).toBeInTheDocument();
});

test('includes an input fields and a submit button with text "Search"', () => {
  render(<SearchBar />);
  const inputfield = screen.getByLabelText('Weather Info For');
  expect(inputfield).toBeInTheDocument();
});
