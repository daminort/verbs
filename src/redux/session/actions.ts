import { SessionPhase, SessionStatus } from '../../assets/enums/session';
import { ActionUnion, createAction } from '../commonTypes';
import { SessionActionsTypes } from './types';
import { IrregularRuEnSet } from '../../assets/types/sessionSets';

export const sessionActions = {
  start: () => createAction(SessionActionsTypes.START),
  next: () => createAction(SessionActionsTypes.NEXT),
  stop: () => createAction(SessionActionsTypes.STOP),
  statusSet: (status: SessionStatus) => createAction(
    SessionActionsTypes.STATUS_SET,
    { status },
  ),

  phaseSet: (phase: SessionPhase) => createAction(
    SessionActionsTypes.PHASE_SET,
    { phase },
  ),

  irregularRuEnSetReload: () => createAction(SessionActionsTypes.IRREGULAR_RU_EN_SET_RELOAD),
  irregularRuEnSetRefresh: (irregularRuEnSet: IrregularRuEnSet) => createAction(
    SessionActionsTypes.IRREGULAR_RU_EN_SET_REFRESH,
    { irregularRuEnSet },
  ),
};

export type SessionAction = ActionUnion<typeof sessionActions>;
