import { css } from 'styled-components';
import { THEME } from '../../../assets/constants/theme';

const { skeleton } = THEME;
const { start, middle, end } = skeleton;

export const basicStyle = css`
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  background: linear-gradient(90deg, ${start}, ${middle}, ${end});
  background-size: 400% 100%;
  animation: loading 1.5s ease infinite;
  
  @keyframes loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;
