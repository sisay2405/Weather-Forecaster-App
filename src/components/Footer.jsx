import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  // position: fixed;
  // top: 530px;
  // width: 100%;
  background-color: #00b5e2;
  padding: 0.7rem 1.5rem;
  h4 {
    font-family: cursive;
    color: #fefe;
    margin: 0.5px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h4>Sisay A © {new Date().getFullYear()}</h4>
    </FooterWrapper>
  );
};

export default Footer;
