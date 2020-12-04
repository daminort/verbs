import React, { Ref, forwardRef, PropsWithChildren } from 'react';

import { StyledBtn } from './Button.style';

interface Props extends PropsWithChildren<any> {
  onClick: () => void;
  disabled?: boolean;
  tabIndex?: number;
}

const Button = forwardRef((props: Props, ref: Ref<HTMLButtonElement>) => {
  const { onClick, children, tabIndex, disabled = false } = props;

  return (
    <StyledBtn ref={ref} tabIndex={tabIndex} disabled={disabled} onClick={onClick}>
      {children}
    </StyledBtn>
  );
});

export default Button;
export { Button };
