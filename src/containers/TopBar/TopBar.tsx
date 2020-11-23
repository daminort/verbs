import React, { FC } from 'react';

import { Icon } from '../../components/Icon';
import { Wrapper } from './TopBar.style';
import { EMPTY_TIME } from '../../assets/constants/timer';

const TopBar: FC = () => {

  return (
    <Wrapper>
      <Icon name="menu" size="normal" color="accent" />
      <span className="timer">{EMPTY_TIME}</span>
      <Icon name="play" size="normal" color="accent" />
    </Wrapper>
  );
};

export default TopBar;
export { TopBar };
