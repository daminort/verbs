import styled from 'styled-components';
import { THEME } from '../../../assets/constants/theme';

const { text } = THEME;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0.2rem 0;

  &.disabled {
    pointer-events: none;
  }

  label {
    width: 100%;
  }

  .radio {
    position: absolute;
    left: -9999px;
    opacity: 0;
  }

  .radio-label {
    position: relative;
    padding-left: 2rem;
    cursor: pointer;
    line-height: 1.5rem;
    display: flex;
    color: ${text.main};

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: calc(50% - 10px);
      width: 16px;
      height: 16px;
      border: 1px solid ${text.main};
      border-radius: 100%;
      background: transparent;
    }

    &:after {
      content: '';
      width: 10px;
      height: 10px;
      background: ${text.accent};
      position: absolute;
      top: calc(50% - 6px);
      left: 4px;
      border-radius: 100%;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }

    &.success {
      font-weight: 500;
      color: ${text.accent};
    }

    &.error {
      text-decoration: line-through;
    }
  }

  .radio:not(:checked) + .radio-label:after {
    opacity: 0;
    transform: scale(0);
  }

  .radio:checked + .radio-label:after {
    opacity: 1;
    transform: scale(1);
  }
`;
