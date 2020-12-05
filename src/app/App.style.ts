import styled from 'styled-components';
import { THEME } from '../assets/constants/theme';

const { bg, media } = THEME;

export const Wrapper = styled.div`
  position: relative;
  display: block;
  background: ${bg.main};
  min-height: 100vh;

  @media (${media.notMobile}) {
    max-width: 460px;
    min-height: calc(100vh - 2 * (100vh / 15));
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid ${bg.secondary};
    margin: calc(100vh / 15) auto 0;
  }
`;
