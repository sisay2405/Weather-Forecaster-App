import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GlobalStyle from '../globalStyle';
import Footer from '../Components/Footer';

const Wrapper = styled.div`
`;

const Layout = () => {
  const theme = useSelector((state) => state.theme.value);
  useEffect(() => {
    document.title = `${
      theme[0].toUpperCase() + theme.slice(1)
    } App`;
  });

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
