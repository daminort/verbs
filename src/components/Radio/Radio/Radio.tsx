import React, { FC, useCallback, useContext } from 'react';
import clsx from 'clsx';

import { Status } from '../../../assets/types/input';
import { Icon } from '../../Icon';
import { RadioContext } from '../context';
import { Wrapper } from './Radio.style';

interface Props {
  label: string;
  name: string;
  status?: Status;
  disabled?: boolean;
}

const Radio: FC<Props> = props => {
  const { label, name, status = 'normal', disabled = false } = props;

  const { selected, setSelected } = useContext(RadioContext);

  const onClick = useCallback(() => {
    if (disabled) {
      return;
    }
    setSelected(name);
  }, [name, disabled, setSelected]);

  const checked = selected === name;
  const showSuccess = status === 'success';
  const showError = status === 'error';

  const labelClass = clsx('radio-label', {
    disabled,
    success: showSuccess,
    error: showError,
  });

  return (
    <Wrapper>
      <label onClick={onClick}>
        <input type="radio" className="radio" name={name} checked={checked} onChange={() => {}} />
        <span className={labelClass}>{label}</span>
      </label>
      {showSuccess && <Icon name="check" size="small" color="success" />}
      {showError && <Icon name="close" size="small" color="error" />}
    </Wrapper>
  );
};

export default Radio;
export { Radio };
