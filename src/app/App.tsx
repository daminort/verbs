import React, { FC } from 'react';

import { TopBar } from '../containers/TopBar';
import { Tabs } from '../containers/Tabs';
import { PublicRoutes } from '../routes';

import { Wrapper } from './App.style';

const App: FC = () => {
  return (
    <Wrapper>
      <TopBar />
      <Tabs />
      <PublicRoutes />
    </Wrapper>
  );
};

export default App;
export { App };
