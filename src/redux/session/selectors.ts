import { createSelector } from 'reselect';
import { SessionStatus } from '../../assets/enums/session';
import { RootState } from '../store';

const status = (state: RootState) => state.Session.status;
const irregularRuEnSet = (state: RootState) => state.Session.irregularRuEnSet;

export const selectIsSessionActive = createSelector(
  [status],
  status => status === SessionStatus.active,
);

export const selectCurrentIrregularRuEn = createSelector(
  [irregularRuEnSet],
  irregularRuEnSet => {
    return irregularRuEnSet[0] || {};
  },
);
