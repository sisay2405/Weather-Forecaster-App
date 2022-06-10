import React, { useContext } from 'react';
import ThemeContext from '../utils/ThemeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={`header ${theme === 'seven-days-Weather' ? 'header--seven-days-Weather-mode' : ''}`}>
      <h1>
        {theme[0].toUpperCase() + theme.slice(1)} Forcaster App
      </h1>
    </header>
  );
};
export default Header;
