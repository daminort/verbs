import React, { FC, useCallback, useContext } from 'react';
import clsx from 'clsx';

import { Icon } from '../../Icon';
import { RadioContext } from '../context';
import { Wrapper } from './Radio.style';

type Status = 'normal' | 'success' | 'error';

interface Props {
  label: string;
  name: string;
  status?: Status;
}

const Radio: FC<Props> = props => {
  const { label, name, status = 'normal' } = props;

  const { selected, setSelected } = useContext(RadioContext);

  const onClick = useCallback(() => {
    setSelected(name);
  }, [name, setSelected]);

  const checked = selected === name;
  const showSuccess = status === 'success';
  const showError = status === 'error';

  const labelClass = clsx('label', {
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
