import React, { FC, useCallback } from 'react';

import { Directions } from '../../assets/enums/app';
import { Icon } from '../Icon';
import { Wrapper } from './DirectionSwitcher.style';

interface Props {
  direction: Directions;
  onChange: (d: Directions) => void;
}

const options = {
  [Directions.ruEn]: { from: 'Ru', to: 'En', next: Directions.enRu },
  [Directions.enRu]: { from: 'En', to: 'Ru', next: Directions.ruEn },
};

const DirectionSwitcher: FC<Props> = ({ direction, onChange }) => {
  const { from, to, next } = options[direction];

  const onClick = useCallback(() => {
    onChange(next);
  }, [onChange, next]);

  return (
    <Wrapper onClick={onClick}>
      <span>{from}</span>
      <Icon name="right" size="small" color="normal" />
      <span>{to}</span>
    </Wrapper>
  );
};

export default DirectionSwitcher;
export { DirectionSwitcher };
