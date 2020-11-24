import React, { FC } from 'react';
import clsx from 'clsx';
import { Wrapper } from './Task.style';

interface Props {
  value: string;
  disabled?: boolean;
}

const Task: FC<Props> = ({ value, disabled = false }) => {

  const wrapperClass = clsx({
    disabled,
  });

  return (
    <Wrapper className={wrapperClass}>
      {value}
    </Wrapper>
  );
};

export default Task;
export { Task };
