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
  }
  .header {
  padding: 1rem 0;
  text-align: center;
  background-color: rgb(17, 178, 236);
  &--seven-days-Weather-mode {
    background-color: white;
    color: dark;
  }
  h1 strong{
    color: orange;
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
  padding: 1.4rem 0;

  text-align: center;
  &--seven-days-Weather-mode {
    background-color:#3466bd;
    color: dark;
  }
}
`;

export default GlobalStyle;
