/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import Footer from '../Components/Footer';
import ThemeContext from '../utils/ThemeContext';

const Wrapper = styled.div`
`;

const Layout = () => {
  const [theme, setTheme] = useState('weather');
  useEffect(() => {
    document.title = `${
      theme[0].toUpperCase() + theme.slice(1)
    } App`;
  });
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'weather' ? 'seven-days-Weather' : 'weather'));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <GlobalStyle />
        <Wrapper>
          <Outlet />
          <Footer />
        </Wrapper>
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
