import React from 'react';
import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sevendaycard from '../Components/SevenDaysCard';

test('renders "Search" as a text', () => {
  render(<Sevendaycard />);
  const searchElement = screen.getByText('Search');
  expect(searchElement).toBeInTheDocument();
});
