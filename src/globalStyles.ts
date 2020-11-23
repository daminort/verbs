import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import { THEME } from './assets/constants/theme';

const { bg, text } = THEME;

export const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background: ${bg.main};
    color: ${text.main};
  }
`;
