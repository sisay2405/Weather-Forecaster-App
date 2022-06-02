import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header` 
  background-color: #00B5E2;
  padding: 0.7rem 1.5rem ;
h2{
  font-family: cursive;
  color: #fefe;
  margin:0.5px;
  text-align:center;
}
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h2> Weather Forcaster App</h2>
    </HeaderWrapper>
  );
};
export default Header;
