import React, { FC, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { Routes } from '../assets/enums/routes';

const IrregularRuEn = lazy(() => import('../pages/IrregularRuEn'));
const IrregularEnRu = lazy(() => import('../pages/IrregularEnRu'));
const IrregularNew = lazy(() => import('../pages/IrregularNew'));

const PhrasalRuEn = lazy(() => import('../pages/PhrasalRuEn'));
const PhrasalEnRu = lazy(() => import('../pages/PhrasalEnRu'));
const PhrasalNew = lazy(() => import('../pages/PhrasalNew'));

const PublicRoutes: FC = () => {
  return (
    <Switch>
      <Suspense fallback={<div />}>
        <Route exact path={Routes.root} component={() => <Redirect to={Routes.irregularRuEn} />} />

        <Route exact path={Routes.irregularRuEn} component={IrregularRuEn} />
        <Route exact path={Routes.irregularEnRu} component={IrregularEnRu} />
        <Route exact path={Routes.irregularNew} component={IrregularNew} />

        <Route exact path={Routes.phrasalRuEn} component={PhrasalRuEn} />
        <Route exact path={Routes.phrasalEnRu} component={PhrasalEnRu} />
        <Route exact path={Routes.phrasalNew} component={PhrasalNew} />
      </Suspense>
    </Switch>
  );
};

export default PublicRoutes;
export { PublicRoutes };
