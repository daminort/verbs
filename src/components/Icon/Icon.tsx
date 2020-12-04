import React, { FC } from 'react';

import { IconName, icons } from '../../assets/icons';
import { IconSize, IconColor } from '../../assets/types/styles';

import { Span } from './Icon.style';

interface Props {
  name: IconName;
  size: IconSize;
  color: IconColor;
  onClick?: () => void;
}

const Icon: FC<Props> = ({ name, size, color, onClick }) => {
  const src = icons[name];
  const cls = `icon ${size} ${color}`;

  return (
    <Span className={cls} onClick={onClick}>
      <img src={src} />
    </Span>
  );
};

export default Icon;
export { Icon };
