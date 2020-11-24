import React, { FC } from 'react';

import { Icon } from '../Icon';
import { Wrapper } from './DirectionSwitcher.style';

type Direction = 'ru-en' | 'en-ru';

interface Props {
  direction: Direction;
  onChange: (d: Direction) => void;
}

const parts = {
  'ru-en': { from: 'Ru', to: 'En' },
  'en-ru': { from: 'En', to: 'Ru' },
}

const DirectionSwitcher: FC<Props> = ({ direction, onChange }) => {

  const { from, to } = parts[direction];

  return (
    <Wrapper>
      <span>{from}</span>
      <Icon name="right" size="small" color="normal" />
      <span>{to}</span>
    </Wrapper>
  );
};

export default DirectionSwitcher;
export { DirectionSwitcher };
