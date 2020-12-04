import styled from 'styled-components';
import { THEME } from '../../assets/constants/theme';

const { size } = THEME;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;

  .label {
    width: 40%;
    font-size: ${size.mini};
  }

  .control {
    width: 60%;
  }
`;
