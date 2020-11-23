import styled from 'styled-components';

import { THEME } from '../../assets/constants/theme';

const { size, svg } = THEME;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${size.normal};
  height: ${size.normal};
  filter: invert(0.5);
  
  &.small {
    width: ${size.small};
    height: ${size.small};
  }
  
  &.medium {
    width: ${size.medium};
    height: ${size.medium};
  }
  
  &.large {
    width: ${size.large};
    height: ${size.large};
  }
  
  &.accent {
    ${svg.accent};
  }
  
  &.success {
    ${svg.success};
  }
  
  &.error {
    ${svg.error};
  }  
`;
