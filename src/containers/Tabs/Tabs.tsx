import React from 'react';

import { Wrapper } from './Tabs.style';

const Tabs = () => {

  return (
    <Wrapper>
      <div className="left">
        <div className="tab active">Irregular</div>
        <div className="tab">Phrasal</div>
      </div>
      <div className="right">

      </div>
    </Wrapper>
  );
};

export default Tabs;
export { Tabs };
