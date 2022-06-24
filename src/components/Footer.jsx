import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <footer className={`footer ${theme === 'seven-days-Weather' ? 'footer--seven-days-Weather-mode' : 'red'}`}>
      Sisay A - © {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
