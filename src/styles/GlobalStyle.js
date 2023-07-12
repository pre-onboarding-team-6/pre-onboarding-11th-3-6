import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    word-break: keep-all;
  }

  ul, li {
    list-style: none;
  }

  #root {
    position: absolute;
    width: 480px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default GlobalStyle;
