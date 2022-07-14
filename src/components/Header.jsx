import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const locations = useSelector((state) => state.home.locations);
  const theme = useSelector((state) => state.theme.value);
  return (
    <header
      className={`header ${
        theme === 'seven-days-Weather'
          ? 'header--seven-days-Weather-mode'
          : ''
      }`}
    >
      <h1>
        {theme[0].toUpperCase() + theme.slice(1)} Forcaster App{' '}
        <strong>{locations}</strong>
      </h1>
    </header>
  );
};
export default Header;
