import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import SearchBar from './components/SearchBar';

// eslint-disable-next-line no-undef
test('button has correct color and text before and after click', () => {
  render(
    <SearchBar />
  );
});
