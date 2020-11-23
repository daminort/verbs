import React from 'react';

import { TopBar } from '../containers/TopBar';
import { Tabs } from '../containers/Tabs';
import { PublicRoutes } from '../routes';

import { Wrapper } from './App.style';

function App() {
  return (
    <Wrapper>
      <TopBar />
      <Tabs />
      <PublicRoutes />
    </Wrapper>
  );
}

export default App;
export { App };
