import styled from 'styled-components';

import { THEME } from '../../assets/constants/theme';

const { bg, text, size } = THEME;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  color: ${text.main};
  font-size: ${size.tiny};
  font-weight: 500;
  
  .left {
    display: flex;
    align-items: center;
    
    .tab {
      padding: 0.5rem 1rem;
      cursor: pointer;
      
      &.active {
        color: ${text.accent};
        font-weight: 500;
        border-bottom: 4px solid ${bg.secondaryAccent};
      }
    }
  }
`;
