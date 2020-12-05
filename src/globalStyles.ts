import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { THEME } from './assets/constants/theme';

const { bg, text, media } = THEME;

export const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background: ${bg.main};
    color: ${text.main};

    @media (${media.notMobile}) {
      background: ${bg.accent};
    }
  }
  
  #root {
    min-height: 100vh;
  }
`;
