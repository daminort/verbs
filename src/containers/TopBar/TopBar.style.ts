import styled from 'styled-components';

import { THEME } from '../../assets/constants/theme';

const { bg, text } = THEME;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: ${bg.accent};
  color: ${text.accent};

  .icon {
    flex-grow: 1;
  }

  .timer {
    flex-grow: 22;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
