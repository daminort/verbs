import { createSelector } from 'reselect';

import { Modes, Directions } from '../../assets/enums/app';
import { RootState } from '../store';

const location = (state: RootState) => state.router.location;

export const selectMode = createSelector(
  [location],
  (location) => {
    const { pathname } = location;
    if (pathname.includes(Modes.irregular)) {
      return Modes.irregular;
    }
    if (pathname.includes(Modes.phrasal)) {
      return Modes.phrasal;
    }

    return null;
  }
);

export const selectDirection = createSelector(
  [location],
  (location) => {
    const { pathname } = location;
    if (pathname.includes(Directions.ruEn)) {
      return Directions.ruEn;
    }
    if (pathname.includes(Directions.enRu)) {
      return Directions.enRu;
    }

    return null;
  }
);

export const selectIsNew = createSelector(
  [location],
  (location) => {
    const { pathname } = location;
    return pathname.includes('/new');
  }
);
