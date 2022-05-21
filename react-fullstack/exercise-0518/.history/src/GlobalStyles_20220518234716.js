import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
* {
  font-family: 'Gothic A1';
  box-sizing: border-box;
  margin: 0;
  background-color: black;
}
body {
background-color: #f5f6f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
}
`;
export default GlobalStyles;
