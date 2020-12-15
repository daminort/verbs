/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { SessionPhase, SessionStatus } from '../../assets/enums/session';
import { ActionUnion, createAction } from '../commonTypes';
import { SessionActionsTypes } from './types';
import { IrregularEnRuSet, IrregularRuEnSet } from '../../assets/types/sessionSets';

export const sessionActions = {
  start: () => createAction(SessionActionsTypes.START),
  stop: () => createAction(SessionActionsTypes.STOP),
  next: (isError: boolean) => createAction(SessionActionsTypes.NEXT, { isError }),
  statusSet: (status: SessionStatus) => createAction(SessionActionsTypes.STATUS_SET, { status }),

  phaseSet: (phase: SessionPhase) => createAction(SessionActionsTypes.PHASE_SET, { phase }),

  /* Irregular: Ru -> En */
  irregularRuEnSetReload: () => createAction(SessionActionsTypes.IRREGULAR_RU_EN_SET_RELOAD),
  irregularRuEnSetRefresh: (irregularRuEnSet: IrregularRuEnSet) =>
    createAction(SessionActionsTypes.IRREGULAR_RU_EN_SET_REFRESH, { irregularRuEnSet }),
  irregularRuEnDebtRefresh: (irregularRuEnDebt: Array<string>) =>
    createAction(SessionActionsTypes.IRREGULAR_RU_EN_DEBT_REFRESH, { irregularRuEnDebt }),

  /* Irregular: En -> Ru */
  irregularEnRuSetReload: () => createAction(SessionActionsTypes.IRREGULAR_EN_RU_SET_RELOAD),
  irregularEnRuSetRefresh: (irregularEnRuSet: IrregularEnRuSet) =>
    createAction(SessionActionsTypes.IRREGULAR_EN_RU_SET_REFRESH, { irregularEnRuSet }),
  irregularEnRuDebtRefresh: (irregularEnRuDebt: Array<string>) =>
    createAction(SessionActionsTypes.IRREGULAR_EN_RU_DEBT_REFRESH, { irregularEnRuDebt }),
};

export type SessionAction = ActionUnion<typeof sessionActions>;
