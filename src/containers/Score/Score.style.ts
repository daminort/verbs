import styled from 'styled-components';
import { THEME } from '../../assets/constants/theme';

const { text } = THEME;

export const Wrapper = styled.div`
  display: block;
  padding: 1rem 1rem;
  
  h3 {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${text.accent};
    padding-bottom: 0.5rem;
  }
  
  .row {
    display: flex;
    font-size: 0.8rem;
    padding: 0.25rem 0;
    
    .label {
      width: 25%;
    }
  }
`;
