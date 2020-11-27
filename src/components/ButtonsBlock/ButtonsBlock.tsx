import React, { FC } from 'react';
import { Wrapper } from './ButtonsBlock.style';

const ButtonsBlock: FC = ({ children }) => {

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default ButtonsBlock;
export { ButtonsBlock };
