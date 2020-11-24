import React, { FC } from 'react';

import { Directions } from '../../assets/enums/app';
import { Icon } from '../Icon';
import { Wrapper } from './DirectionSwitcher.style';

interface Props {
  direction: Directions;
  onChange: (d: Directions) => void;
}

const parts = {
  [Directions.ruEn]: { from: 'Ru', to: 'En' },
  [Directions.enRu]: { from: 'En', to: 'Ru' },
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
