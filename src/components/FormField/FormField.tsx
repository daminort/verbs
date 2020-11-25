import React, { FC } from 'react';

import { Icon } from '../Icon';
import { Wrapper } from './FormField.style';

type IconType = 'success' | 'error';

interface Props {
  label: string | React.ReactNode;
  icon?: IconType;
}

const FormField: FC<Props> = (props) => {
  const {
    label,
    children,
    icon,
  } = props;

  const isSuccess = (icon === 'success');
  const isError = (icon === 'error');

  const showIcon = (isSuccess || isError);
  const iconName = isError ? 'close' : 'check';
  const iconColor = isError ? 'error' : 'success';

  return (
    <Wrapper>
      <div className="label">{label}</div>
      <div className="control">{children}</div>
      {showIcon && (
        <Icon name={iconName} size="small" color={iconColor} />
      )}
    </Wrapper>
  );
};

export default FormField;
export { FormField };
