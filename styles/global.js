import { css, createGlobalStyle } from 'styled-components/macro';

import colors from './colors';
import base from './base';
import fonts from './fonts';
import vars from './vars';

// компонент прописывающий глобальные стили приложения
const GlobalStyles = createGlobalStyle`
  :root {
    ${css(colors)};
    ${fonts}
    ${vars}
  }
  
  ${base};
`;

export default GlobalStyles;
