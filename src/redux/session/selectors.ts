import { createSelector } from 'reselect';
import { SessionStatus } from '../../assets/enums/session';
import { RootState } from '../store';

const status = (state: RootState) => state.Session.status;
const phase = (state: RootState) => state.Session.phase;
const irregularRuEnSet = (state: RootState) => state.Session.irregularRuEnSet;
const irregularRuEnDebt = (state: RootState) => state.Session.irregularRuEnDebt;
const irregularEnRuSet = (state: RootState) => state.Session.irregularEnRuSet;
const irregularEnRuDebt = (state: RootState) => state.Session.irregularEnRuDebt;

export const selectIsSessionActive = createSelector([status], status => status === SessionStatus.active);

export const selectSessionPhase = createSelector([phase], phase => phase);

/* Irregular: Ru -> En */

export const selectIrregularRuEnSet = createSelector([irregularRuEnSet], sessionSet => sessionSet);

export const selectCurrentIrregularRuEn = createSelector([irregularRuEnSet], sessionSet => {
  return sessionSet[0] || {};
});

export const selectIrregularRuEnDebt = createSelector([irregularRuEnDebt], debts => debts);

/* Irregular: En -> Ru */

export const selectIrregularEnRuSet = createSelector([irregularEnRuSet], sessionSet => sessionSet);

export const selectCurrentIrregularEnRu = createSelector([irregularEnRuSet], sessionSet => {
  return sessionSet[0] || {};
});

export const selectIrregularEnRuDebt = createSelector([irregularEnRuDebt], debts => debts);
