import React, { FC } from 'react';

import { StyledBtn } from './Button.style';

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

const Button: FC<Props> = ({ disabled, onClick, children }) => {

  return (
    <StyledBtn
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledBtn>
  );
};

export default Button;
export { Button };
