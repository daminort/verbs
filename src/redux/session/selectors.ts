import { createSelector } from 'reselect';
import { SessionStatus } from '../../assets/enums/session';
import { RootState } from '../store';

const status = (state: RootState) => state.Session.status;
const phase = (state: RootState) => state.Session.phase;
const irregularRuEnSet = (state: RootState) => state.Session.irregularRuEnSet;
const irregularRuEnDebt = (state: RootState) => state.Session.irregularRuEnDebt;

export const selectIsSessionActive = createSelector(
  [status],
  status => status === SessionStatus.active,
);

export const selectSessionPhase = createSelector(
  [phase],
  phase => phase,
);

export const selectIrregularRuEnSet = createSelector(
  [irregularRuEnSet],
  irregularRuEnSet => irregularRuEnSet,
);

export const selectCurrentIrregularRuEn = createSelector(
  [irregularRuEnSet],
  irregularRuEnSet => {
    return irregularRuEnSet[0] || {};
  },
);

export const selectIrregularRuEnDebt = createSelector(
  [irregularRuEnDebt],
  irregularRuEnDebt => irregularRuEnDebt,
);
