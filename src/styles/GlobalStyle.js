import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  h2{
    font-size: 16px;
  }

  span{
    font-size: 14px;
  }

  a{
    cursor: pointer;
  }

`;

export default GlobalStyle;
