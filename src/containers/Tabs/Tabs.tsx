import React, { useCallback } from 'react';

import { DirectionSwitcher } from '../../components/DirectionSwitcher';
import { Wrapper } from './Tabs.style';

const Tabs = () => {

  const onChangeDirection = useCallback(direction => {
    console.log({ direction });
  }, []);

  return (
    <Wrapper>
      <div className="left">
        <div className="tab active">Irregular</div>
        <div className="tab">Phrasal</div>
      </div>
      <div className="right">
        <DirectionSwitcher
          direction="ru-en"
          onChange={onChangeDirection}
        />
      </div>
    </Wrapper>
  );
};

export default Tabs;
export { Tabs };
