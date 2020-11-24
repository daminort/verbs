import styled from 'styled-components';
import { THEME } from '../../assets/constants/theme';

const { text } = THEME;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${text.accent};
  
  &.disabled {
    color: ${text.main};
  }
`;
