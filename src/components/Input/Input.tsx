import React, { FC, useCallback, ChangeEvent } from 'react';
import clsx from 'clsx';

import { Status } from '../../assets/types/input';
import { Icon } from '../Icon';
import { Wrapper } from './Input.style';

interface Props {
  value: string;
  onChange: (v: string) => void;
  name?: string;
  placeholder?: string;
  status?: Status;
  message?: string;
  disabled?: boolean;
}

const Input: FC<Props> = (props) => {
  const {
    value,
    placeholder,
    onChange,
    name = '',
    status = 'normal',
    message = '',
    disabled = false,
  } = props;

  const onChangeValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }, [onChange]);

  const showSuccess = (status === 'success');
  const showError = (status === 'error');
  const showMessage = showError && !!message;

  const inputClass = clsx('input', {
    error: showError,
  });

  return (
    <Wrapper>
      <input
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChangeValue}
        className={inputClass}
      />
      {showSuccess && (
        <Icon name="check" size="small" color="success" />
      )}
      {showError && (
        <Icon name="close" size="small" color="error" />
      )}
      {showMessage && (
        <span className="message">{message}</span>
      )}
    </Wrapper>
  );
};

export default Input;
export { Input };
