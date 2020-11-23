import React, { FC } from 'react';

import { IconName, icons } from '../../assets/icons';
import { IconSize, IconColor } from '../../assets/types/styles';

import { Span } from './Icon.style';

interface Props {
  name: IconName;
  size: IconSize;
  color: IconColor;
}

const Icon: FC<Props> = ({ name, size, color }) => {

  const src = icons[name];
  const cls = `icon ${size} ${color}`;

  return (
    <Span className={cls}>
      <img src={src} />
    </Span>
  );
};

export default Icon;
export { Icon };
