import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
  .header {
  padding: 0.5rem 0;
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
@keyframes fall{
  0%{
      left:0%;
  }
  100%{ 
      left:110%; 
  }
}
.coffee .coffee1{
  left:10%; 
  animation:fall 4s linear infinite ;
  position:absolute ;
  hight:10px;
}
.coffee .coffee2{
  left:20%; 
  animation:fall 5s linear infinite ;
  position:absolute ;
  top:50%;
}
.coffee .coffee3{
  left:30%; 
  animation:fall 3s linear infinite ;
  position:absolute ;
  top:80%;
}
.coffee .coffee4{
  left:40%; 
  animation:fall 3s linear infinite ; 
  position:absolute ;
  top:50%;
}
.coffee .coffee5{
  left:50%; 
  animation:fall 6s linear infinite ; 
  position:absolute ;
  top:90%;

}
.coffee .coffee6{
  left:60%; 
  animation:fall 7s linear infinite ; 
  position:absolute ;
  top:70%;
}
.coffee .coffee7{
  left:70%; 
  animation:fall 8s linear infinite ; 
  position:absolute ;

}
.coffee .coffee8{
  left:80%; 
  animation:fall 9s linear infinite ; 
  position:absolute ;
  top:60%;
}
.coffee .coffee9{
  left:90%; 
  animation:fall 10s linear infinite ; 
  position:absolute ;
  top:40%;
}
.image11{
  width:10px;
  hight: 10px;
}
`;

export default GlobalStyle;

export const lighten = (color, val) => css`
  background-color: ${color};
  background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, ${val}) 0%,
    rgba(255, 255, 255, ${val}) 100%
  );
`;
