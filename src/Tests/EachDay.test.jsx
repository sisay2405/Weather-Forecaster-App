import React from 'react';
import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';
import EachDay from '../Components/EachDay';

test('renders "Search" as a text', () => {
  render(<EachDay />);
  const searchElement = screen.getByText('Search');
  expect(searchElement).toBeInTheDocument();
});
