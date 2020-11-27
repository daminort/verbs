import styled from 'styled-components';
import { THEME } from '../../assets/constants/theme';

const { bg, text, colors, border } = THEME;

export const StyledBtn = styled.button`
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  min-width: 6rem;
  background-color: ${bg.secondaryAccent};
  color: ${text.accent};
  cursor: pointer;
  
  &:disabled {
    background-color: ${bg.secondary};
    color: ${text.main};
  }
  
  &:focus {
    outline: 0;
    border: 1px solid ${border.focus};
  }
`;
