import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
* {
    font-family: 'Gothic A1', sans-serif;
  box-sizing: border-box;
  margin: 0;
}
body {
padding: 0;
background-color: #f5f6f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
ul {
list-style: none;
padding: 0;
margin: 0;
}
a {
text-decoration: none;
color: black;
}
img {
  width: 100%;
}

`;
export default GlobalStyles;
