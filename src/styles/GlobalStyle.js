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

  span{
    font-size: 14px;
  }

  a{
    cursor: pointer;
  }

  a:hover,
  a:link,
  a:visited,
  a:hover {
    text-decoration:none;
  }
`;

export default GlobalStyle;
