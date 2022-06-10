import React, { useContext } from 'react';
import ThemeContext from '../utils/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`footer ${theme === 'seven-days-Weather' ? 'footer--seven-days-Weather-mode' : 'red'}`}>
      Sisay A - © {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
