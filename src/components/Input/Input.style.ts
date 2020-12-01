import styled from 'styled-components';
import { THEME } from '../../assets/constants/theme';

const { border, size, text, bg } = THEME;

export const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  
  input {
    width: 100%;
    box-sizing: border-box;
    border: 2px solid ${border.input};
    border-radius: 4px;
    font-size: ${size.mini};
    padding: 0.5rem;
    font-family: inherit;
    background-color: ${bg.input};

    &::placeholder {
      color: ${text.main};
    }
    
    &.error {
      color: ${text.main};
      text-decoration: line-through;
    }
    
    &:focus {
      outline: 0;
      border: 2px solid ${border.focus};
    }
    
    &:disabled {
      background-color: ${bg.input};
    }
  }
  
  .icon {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .message {
    position: absolute;
    right: 1.8rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${text.error};
    font-size: ${size.mini};
  }
`;
