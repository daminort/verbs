import React, { useCallback, ChangeEvent, KeyboardEvent, forwardRef, Ref } from 'react';
import clsx from 'clsx';

import { Status } from '../../assets/types/input';
import { OnEnterCallback } from '../../assets/types/events';
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
  tabIndex?: number;
  onEnter?: OnEnterCallback;
}

const Input = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  const {
    value,
    placeholder,
    onChange,
    name = '',
    status = 'normal',
    message = '',
    disabled = false,
    onEnter = () => {},
    tabIndex,
  } = props;

  const onChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onEnter({
          name,
          value,
        });
      }
    },
    [name, value, onEnter]
  );

  const showSuccess = status === 'success';
  const showError = status === 'error';
  const showMessage = showError && !!message;

  const inputClass = clsx('input', {
    error: showError,
  });

  return (
    <Wrapper>
      <input
        ref={ref}
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChangeValue}
        onKeyDown={onKeyDown}
        className={inputClass}
        tabIndex={tabIndex}
      />
      {showSuccess && <Icon name="check" size="small" color="success" />}
      {showError && <Icon name="close" size="small" color="error" />}
      {showMessage && <span className="message">{message}</span>}
    </Wrapper>
  );
});

export default Input;
export { Input };
