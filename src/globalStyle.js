import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }
  body {
    // background-color: #fefefe;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    // padding: 0;
    button {
      cursor: pointer;
      padding: 0.5rem 2rem;
      width: 150px;
    }
  }
  .header {
  padding: 2rem 0;
  text-align: center;
  background-color: rgb(17, 178, 236);
  &--seven-days-Weather-mode {
    background-color: white;
    color: dark;
  }
}
.content {
  flex: 1;
  padding: 1rem 1.5rem;
  &--seven-days-Weather-mode {
    background-color:#3466bd;
    color: white;
  }
}

.footer {
  background-color: rgb(17, 178, 236);
  color: white;
  padding: 2rem 0;
  
  text-align: center;
  &--seven-days-Weather-mode {
    background-color:#3466bd;
    color: dark;
  }
}
.profile {
  align-items: flex-start;
  background: #00B5E2;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  display: flex;
  flex-direction: row;
  margin: 2rem auto;
  margin-top: 0rem;
  width: 475px;
  img {
    margin-right: 1rem;
  }
  h1 {
    font-weight: 700;
  }
}
`;

export default GlobalStyle;
